// ─────────────────────────────────────────────────────────
// APVMA PERMITS REGISTRY UI
// Renders and searches permit cards from window.permitsRegistry
// ─────────────────────────────────────────────────────────

function parsePermitExpiry(dateStr) {
    if (!dateStr) return null;
    const months = {
        'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
        'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11,
        'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'jun': 5, 'jul': 6, 'aug': 7,
        'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
    };
    // Try DD/MM/YYYY
    const slashMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (slashMatch) {
        return new Date(parseInt(slashMatch[3]), parseInt(slashMatch[2]) - 1, parseInt(slashMatch[1]));
    }
    // Try "DD MONTH YYYY"
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = months[parts[1].toLowerCase()];
        const year = parseInt(parts[2]);
        if (!isNaN(day) && month !== undefined && !isNaN(year)) {
            return new Date(year, month, day);
        }
    }
    return null;
}

function renderPermitsRegistry(list, query) {
    const hl = window.highlightSearchTerm || function(t) { return t; };
    const container = document.getElementById('permits-results');
    if (!container) return;

    const countEl = document.getElementById('permits-result-count');

    if (!list || list.length === 0) {
        container.innerHTML = '<div class="search-prompt">No permits found matching that query.</div>';
        if (countEl) countEl.textContent = '';
        return;
    }

    if (countEl) {
        countEl.textContent = list.length + ' permit' + (list.length !== 1 ? 's' : '');
    }

    const today = new Date();
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(today.getMonth() + 6);
    
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    container.innerHTML = list.map(function(p) {
        const expiry = parsePermitExpiry(p.expiryDate);
        const issue = parsePermitExpiry(p.issueDate);
        
        let isActive = expiry ? expiry >= today : null;
        let isExpiringSoon = expiry ? (expiry >= today && expiry <= sixMonthsFromNow) : false;
        let isNew = issue ? (issue >= sixMonthsAgo) : false;
        let isExtended = p.isExtended === true;

        let statusHtml;
        let borderColor = '#94a3b8';
        let expiryColor = 'inherit';

        if (isActive === null) {
            statusHtml = '<div class="apvma-status-badge" style="background:#f1f5f944; color:#64748b; border:1px solid #64748b44;">❓ Unknown Status</div>';
        } else if (!isActive) {
            statusHtml = '<div class="apvma-status-badge" style="background:#ef444422; color:#ef4444; border:1px solid #ef444444;">❌ Expired</div>';
            borderColor = '#ef4444';
            expiryColor = '#ef4444';
        } else if (isExpiringSoon) {
            statusHtml = '<div class="apvma-status-badge" style="background:#f9731622; color:#ea580c; border:1px solid #f9731644;">⚠️ Expiring Soon</div>';
            borderColor = '#f97316';
            expiryColor = '#ea580c';
        } else if (isExtended) {
            statusHtml = '<div class="apvma-status-badge" style="background:#3b82f622; color:#2563eb; border:1px solid #3b82f644;">🔄 Extended</div>';
            borderColor = '#3b82f6';
        } else if (isNew) {
            statusHtml = '<div class="apvma-status-badge" style="background:#8b5cf622; color:#7c3aed; border:1px solid #8b5cf644;">✨ New</div>';
            borderColor = '#8b5cf6';
        } else {
            statusHtml = '<div class="apvma-status-badge" style="background:var(--agri-green,#16a34a)22; color:var(--agri-green,#16a34a); border:1px solid var(--agri-green,#16a34a)44;">✅ In Force</div>';
            borderColor = 'var(--agri-green,#16a34a)';
        }

        const activesHtml = (p.activeIngredients && p.activeIngredients.length > 0)
            ? hl(p.activeIngredients.join(', '), query)
            : 'Not specified';

        const linkedBadge = (p.appProducts && p.appProducts.length > 0)
            ? '<span class="permit-linked-badge">🏷️ In App</span>'
            : '';

        // Build label buttons for each linked app product
        const labelBtnsHtml = (p.appProducts && p.appProducts.length > 0 && typeof productDatabase !== 'undefined')
            ? p.appProducts.map(function(id) {
                const prod = productDatabase[id];
                if (!prod || !prod.labelPdf) return '';
                return '<a href="' + encodeURI(prod.labelPdf) + '" target="_blank" class="view-label-btn" style="width:100%; display:flex; justify-content:center; margin-bottom:8px;"><span class="btn-icon">📄</span> ' + prod.name + ' Label</a>';
            }).filter(Boolean).join('')
            : '';

        // Show first 3 products, collapse the rest
        let productsHtml = '';
        if (p.products && p.products.length > 0) {
            const visible = p.products.slice(0, 3);
            const hidden = p.products.slice(3);
            productsHtml = visible.map(function(prod) {
                return '<li>' + hl(prod, query) + '</li>';
            }).join('');
            if (hidden.length > 0) {
                productsHtml += '<li style="color:var(--text-sub,#64748b); font-size:0.8rem; list-style:none; margin-top:2px;">+ ' + hidden.length + ' more — see PDF</li>';
            }
        } else {
            productsHtml = '<li style="color:var(--text-sub,#64748b);">Not specified</li>';
        }

        return [
            '<div class="apvma-card" style="border-left: 4px solid ' + borderColor + ';">',
            '  <div class="apvma-header">',
            '    <div class="apvma-title" style="font-family:monospace; font-size:1.1rem; font-weight:700;">' + p.permitNumber + linkedBadge + '</div>',
            '    ' + statusHtml,
            '  </div>',
            '  <div class="apvma-body">',
            '    <div class="apvma-row">',
            '      <span class="apvma-label">Active Ingredient:</span>',
            '      <span class="apvma-value" style="font-weight:600;">' + activesHtml + '</span>',
            '    </div>',
            p.issueDate ? [
            '    <div class="apvma-row">',
            '      <span class="apvma-label">Issue Date:</span>',
            '      <span class="apvma-value">' + p.issueDate + '</span>',
            '    </div>'
            ].join('\n') : '',
            '    <div class="apvma-row">',
            '      <span class="apvma-label">Expiry Date:</span>',
            '      <span class="apvma-value" style="font-weight:700; color:' + expiryColor + ';">' + (p.expiryDate || 'N/A') + '</span>',
            '    </div>',
            '    <div class="apvma-row" style="align-items:flex-start;">',
            '      <span class="apvma-label">Products:</span>',
            '      <span class="apvma-value"><ul style="margin:0; padding-left:16px; font-size:0.85rem; line-height:1.6;">' + productsHtml + '</ul></span>',
            '    </div>',
            p.crops && p.crops.length > 0 ? [
                '    <div class="apvma-row" style="align-items:flex-start;">',
                '      <span class="apvma-label">Crops:</span>',
                '      <span class="apvma-value" style="font-size:0.82rem; color:var(--text-sub);">' + hl(p.crops.slice(0, 6).join(', '), query) + (p.crops.length > 6 ? ' +' + (p.crops.length - 6) + ' more' : '') + '</span>',
                '    </div>'
            ].join('\n') : '',
            p.pests && p.pests.length > 0 ? [
                '    <div class="apvma-row" style="align-items:flex-start;">',
                '      <span class="apvma-label">Pests/Diseases:</span>',
                '      <span class="apvma-value" style="font-size:0.82rem; color:var(--text-sub);">' + hl(p.pests.slice(0, 6).join(', '), query) + (p.pests.length > 6 ? ' +' + (p.pests.length - 6) + ' more' : '') + '</span>',
                '    </div>'
            ].join('\n') : '',
            '  </div>',
            '  <div style="margin-top:auto; padding-top:12px;">',
            labelBtnsHtml,
            '    <a href="' + (p.pdfUrl || encodeURI('APVMA - Permits/' + p.pdfFilename)) + '" target="_blank" class="view-permit-btn" style="width:100%; display:flex; justify-content:center;"><span class="btn-icon">📋</span> View Permit PDF' + (p.pdfUrl ? ' (Online)' : '') + '</a>',
            '  </div>',
            '</div>'
        ].join('\n');
    }).join('\n');
}

let permitsSearchTimeout = null;
let permitsLinkedOnly = false;

function togglePermitsLinkedFilter() {
    permitsLinkedOnly = !permitsLinkedOnly;
    const btn = document.getElementById('permits-linked-filter');
    if (btn) btn.classList.toggle('active', permitsLinkedOnly);
    runPermitsSearch();
}

function runPermitsSearch() {
    const inputEl = document.getElementById('permits-search-input');
    if (!inputEl) return;
    const q = inputEl.value.toLowerCase().trim();

    clearTimeout(permitsSearchTimeout);
    permitsSearchTimeout = setTimeout(function() {
        if (!window.permitsRegistry || !window.permitsRegistry.permits) {
            document.getElementById('permits-results').innerHTML = '<div class="search-prompt">Permits registry not loaded.</div>';
            return;
        }

        let list = window.permitsRegistry.permits;

        if (permitsLinkedOnly) {
            list = list.filter(function(p) { return p.appProducts && p.appProducts.length > 0; });
        }

        if (!q) {
            renderPermitsRegistry(list, q);
            return;
        }

        const today = new Date();
        const sixMonthsFromNow = new Date();
        sixMonthsFromNow.setMonth(today.getMonth() + 6);
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(today.getMonth() - 6);

        const filtered = list.filter(function(p) {
            const expiry = parsePermitExpiry(p.expiryDate);
            const issue = parsePermitExpiry(p.issueDate);
            
            const isExpired = expiry ? expiry < today : false;
            const isExpiringSoon = expiry ? (expiry >= today && expiry <= sixMonthsFromNow) : false;
            const isNew = issue ? (issue >= sixMonthsAgo) : false;
            const isExtended = p.isExtended === true;

            let statusMatch = false;
            if (q.includes('expired') && isExpired) statusMatch = true;
            if (q.includes('expiring soon') && isExpiringSoon) statusMatch = true;
            if (q.includes('expiring in 6 months') && isExpiringSoon) statusMatch = true;
            if (q.includes('new') && isNew) statusMatch = true;
            if (q.includes('extended') && isExtended) statusMatch = true;

            let appProductMatch = false;
            if (p.appProducts && p.appProducts.length > 0 && typeof productDatabase !== 'undefined') {
                appProductMatch = p.appProducts.some(function(id) {
                    const prod = productDatabase[id];
                    return prod && prod.name && prod.name.toLowerCase().includes(q);
                });
            }

            return statusMatch || appProductMatch ||
                (p.permitNumber && p.permitNumber.toLowerCase().includes(q)) ||
                (p.activeIngredients && p.activeIngredients.some(function(a) { return a.toLowerCase().includes(q); })) ||
                (p.products && p.products.some(function(prod) { return prod.toLowerCase().includes(q); })) ||
                (p.crops && p.crops.some(function(c) { return c.toLowerCase().includes(q); })) ||
                (p.pests && p.pests.some(function(pt) { return pt.toLowerCase().includes(q); }));
        });

        renderPermitsRegistry(filtered, q);
    }, 250);
}

function clearPermitsSearch() {
    const inputEl = document.getElementById('permits-search-input');
    if (inputEl) {
        inputEl.value = '';
        inputEl.focus();
    }
    runPermitsSearch();
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.permitsRegistry && window.permitsRegistry.permits) {
        renderPermitsRegistry(window.permitsRegistry.permits, '');
    }
});
