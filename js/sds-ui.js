// Build a map from SDS filepath to product label info
function buildSdsToLabelMap() {
    const map = {};
    if (typeof productDatabase === 'undefined') return map;

    for (const productId in productDatabase) {
        const product = productDatabase[productId];
        if (product.sdsPdf && product.labelPdf) {
            map[product.sdsPdf] = {
                labelPdf: product.labelPdf,
                productName: product.name,
                productId: productId
            };
        }
    }
    return map;
}

// Poisons schedule badge colour
function scheduleColor(code) {
    if (code === 'S7') return { bg: '#fee2e2', text: '#991b1b' };
    if (code === 'S6') return { bg: '#ffedd5', text: '#9a3412' };
    if (code === 'S5') return { bg: '#fef9c3', text: '#854d0e' };
    return { bg: '#f1f5f9', text: '#64748b' };
}

function renderSdsRegistry(displayList, query) {
    const hl = window.highlightSearchTerm || function(t) { return t; };
    const container = document.getElementById('sds-results');
    if (!container) return;

    if (!displayList || displayList.length === 0) {
        container.innerHTML = '<div class="no-results">No SDS documents found for that query.</div>';
        return;
    }

    // Build map from SDS paths to label info (for label PDF links)
    const sdsToLabel = buildSdsToLabelMap();

    // Update count display
    const countEl = document.getElementById('sds-result-count');
    if (countEl) {
        countEl.textContent = displayList.length + ' document' + (displayList.length !== 1 ? 's' : '');
    }

    container.innerHTML = displayList.map(function (s) {
        // Check if this SDS has a matching product label (for View Label button)
        const labelInfo = sdsToLabel[s.filepath];

        // Prefer registry-supplied data; fall back to live productDatabase lookup
        const productName = s.productName || (labelInfo ? labelInfo.productName : null);
        const activeIngredient = s.activeIngredient ||
            (labelInfo && typeof productDatabase !== 'undefined' && productDatabase[labelInfo.productId]
                ? productDatabase[labelInfo.productId].activeIngredient
                : null);
        const schedCode  = s.poisonsSchedule || null;
        const schedLabel = s.poisonsScheduleLabel || (schedCode ? schedCode : null);

        // ── Badges ────────────────────────────────────────────────
        const linkedBadge = (productName)
            ? '<span style="background:#d1fae5; color:#065f46; padding:2px 8px; border-radius:12px; font-size:0.7rem; font-weight:700; margin-left:8px;">Linked</span>'
            : '';

        let scheduleBadge = '';
        if (schedCode) {
            const sc = scheduleColor(schedCode);
            scheduleBadge = '<span style="background:' + sc.bg + '; color:' + sc.text + '; padding:2px 8px; border-radius:12px; font-size:0.7rem; font-weight:700; margin-left:6px;">' + schedCode + '</span>';
        }

        // ── Meta rows ─────────────────────────────────────────────
        const companyRow = s.company
            ? '<div style="font-size:0.8rem; color:var(--text-sub); margin-top:5px;"><strong>Company:</strong> ' + hl(s.company, query) + '</div>'
            : '';

        const productRow = productName
            ? '<div style="font-size:0.8rem; color:var(--text-sub); margin-top:3px;"><strong>Product:</strong> ' + hl(productName, query) + '</div>'
            : '';

        const aiRow = activeIngredient
            ? '<div style="font-size:0.8rem; color:var(--text-sub); margin-top:3px;"><strong>Active:</strong> ' + hl(activeIngredient, query) + '</div>'
            : '';

        const schedRow = schedLabel
            ? '<div style="font-size:0.8rem; color:var(--text-sub); margin-top:3px;"><strong>Poisons Schedule:</strong> ' + schedLabel + '</div>'
            : '';

        // ── Buttons ───────────────────────────────────────────────
        const labelBtn = labelInfo
            ? '<a href="' + encodeURI(labelInfo.labelPdf) + '" target="_blank" class="view-label-btn" style="width:100%; display:flex; text-align:center; margin-top:8px;"><span class="btn-icon">📄</span> View Product Label</a>'
            : '';

        // ── Border colour by schedule ─────────────────────────────
        const borderColor = schedCode === 'S7' ? '#dc2626'
            : schedCode === 'S6' ? '#ea580c'
            : schedCode === 'S5' ? '#ca8a04'
            : productName ? 'var(--agri-green)'
            : 'var(--text-muted)';

        return [
            '<div class="apvma-card" style="border-left: 4px solid ' + borderColor + ';">',
            '  <div class="apvma-header">',
            '    <div class="apvma-product-name" style="color:var(--text-main); font-weight:600; font-size:1.05rem;">',
            '      ' + hl((s.displayName || s.filename), query) + linkedBadge + scheduleBadge,
            '    </div>',
            '    <div class="apvma-number" style="background:#f1f5f9; color:#64748b; padding:2px 6px; border-radius:4px; font-size:0.75rem; font-family:monospace;">' + (s.company || 'SDS') + '</div>',
            '  </div>',
            companyRow,
            productRow,
            aiRow,
            schedRow,
            '  <div class="apvma-details" style="margin-top:10px;">',
            '    <a href="' + encodeURI(s.filepath) + '" target="_blank" class="view-sds-btn" style="width:100%; display:flex; text-align:center;"><span class="btn-icon">🛡️</span> View Safety Data Sheet (SDS)</a>',
            labelBtn,
            '  </div>',
            '</div>'
        ].join('\n');
    }).join('\n');
}

let sdsSearchTimeout = null;

function runSdsSearch() {
    const inputEl = document.getElementById('sds-search-input');
    if (!inputEl) return;
    const q = inputEl.value.toLowerCase().trim();

    // Debounce
    clearTimeout(sdsSearchTimeout);
    sdsSearchTimeout = setTimeout(() => {
        if (!window.sdsRegistry || !window.sdsRegistry.length) {
            document.getElementById('sds-results').innerHTML = '<div class="no-results">SDS registry not loaded.</div>';
            return;
        }

        if (!q) {
            // Empty query shows all documents
            renderSdsRegistry(window.sdsRegistry, '');
            return;
        }

        // Build label map once for linked-label searching
        const sdsToLabel = buildSdsToLabelMap();

        // Split query into individual terms for multi-word search
        // e.g. "nufarm glyphosate" matches entries containing BOTH words
        const terms = q.split(/\s+/).filter(t => t.length > 0);

        const filtered = window.sdsRegistry.filter(sds => {
            // Build a searchable text blob for this entry
            const parts = [
                sds.filename || '',
                sds.displayName || '',
                sds.productName || '',
                sds.activeIngredient || '',
                sds.company || '',
                sds.poisonsSchedule || '',
                sds.poisonsScheduleLabel || ''
            ];

            // Add linked product fields if available
            const linked = sdsToLabel[sds.filepath];
            if (linked && typeof productDatabase !== 'undefined') {
                const prod = productDatabase[linked.productId];
                if (prod) {
                    parts.push(prod.activeIngredient || '');
                    parts.push(prod.group || '');
                    parts.push(prod.modeOfAction || '');
                    if (prod.classification) {
                        parts.push(typeof prod.classification.type === 'string' ? prod.classification.type : (Array.isArray(prod.classification.type) ? prod.classification.type.join(' ') : ''));
                        parts.push(Array.isArray(prod.classification.target) ? prod.classification.target.join(' ') : (prod.classification.target || ''));
                        parts.push(Array.isArray(prod.classification.timing) ? prod.classification.timing.join(' ') : (prod.classification.timing || ''));
                    }
                }
            }

            const blob = parts.join(' ').toLowerCase();

            // Every search term must appear somewhere in the blob
            return terms.every(term => blob.includes(term));
        });

        renderSdsRegistry(filtered, q);
    }, 250);
}

function clearSdsSearch() {
    const inputEl = document.getElementById('sds-search-input');
    if (inputEl) {
        inputEl.value = '';
        inputEl.focus();
    }
    runSdsSearch();
}

// Automatically populate the list when the App initializes a tab switch if the user opens the SDS tab
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render of full catalog
    if (window.sdsRegistry) {
        renderSdsRegistry(window.sdsRegistry, '');
    }
});
