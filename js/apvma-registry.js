// ─────────────────────────────────────────────────────────
// APVMA PUBCRIS REGISTRY SEARCH ENGINE
// Operates on the offline window.pubcrisRegistry loaded from data.gov.au
// ─────────────────────────────────────────────────────────

let apvmaSearchDebounce = null;
let apvmaInAppOnly = true;
let apvmaAllResults = [];
let apvmaCurrentPage = 1;
const APVMA_PAGE_SIZE = 100;

// Build a map from APVMA ID string → product info, using productDatabase.apvma field
function buildApvmaToProductMap() {
    const map = {};
    if (typeof productDatabase === 'undefined') return map;
    for (const id in productDatabase) {
        const prod = productDatabase[id];
        if (prod.apvma) {
            // apvma field may be "54522/63209" — split on / for multiple registrations
            String(prod.apvma).split('/').forEach(function (num) {
                const trimmed = num.trim();
                if (trimmed) map[trimmed] = { productId: id, name: prod.name, labelPdf: prod.labelPdf || null };
            });
        }
    }
    return map;
}

function toggleApvmaInAppFilter() {
    apvmaInAppOnly = !apvmaInAppOnly;
    const btn = document.getElementById('apvma-inapp-filter');
    if (btn) btn.classList.toggle('active', apvmaInAppOnly);
    runApvmaSearch();
}

function runApvmaSearch() {
    clearTimeout(apvmaSearchDebounce);
    apvmaSearchDebounce = setTimeout(() => {
        const input = document.getElementById('apvma-search-input');
        const q = input ? input.value.trim().toLowerCase() : '';
        const container = document.getElementById('apvma-results');

        if (!window.pubcrisRegistry || window.pubcrisRegistry.length === 0) {
            container.innerHTML = '<div class="search-prompt" style="color:var(--danger);">Error: Offline APVMA Registry database could not be loaded.</div>';
            return;
        }

        const apvmaToProduct = buildApvmaToProductMap();

        // No query — show in-app products if filter active, otherwise show all (paginated)
        if (!q) {
            if (apvmaInAppOnly) {
                const appLinked = window.pubcrisRegistry.filter(e => apvmaToProduct[String(e.id)]);
                renderApvmaResults(appLinked, apvmaToProduct, q);
            } else {
                // Show all entries sorted: in-app first, then alphabetical. Paginated.
                const all = window.pubcrisRegistry.slice().sort((a, b) => {
                    const aInApp = apvmaToProduct[String(a.id)] ? 1 : 0;
                    const bInApp = apvmaToProduct[String(b.id)] ? 1 : 0;
                    if (bInApp !== aInApp) return bInApp - aInApp;
                    return (a.name || '').localeCompare(b.name || '');
                });
                apvmaAllResults = all;
                apvmaCurrentPage = 1;
                renderApvmaPaginated(all, apvmaToProduct, q);
            }
            return;
        }

        const tokens = q.split(/\s+/);

        // Map short category codes to searchable full names
        const catFullName = function (cat) {
            if (!cat) return '';
            const c = cat.toUpperCase();
            if (c === 'A') return 'agricultural';
            if (c === 'V' || c === 'VM') return 'veterinary';
            return cat.toLowerCase();
        };

        let results = window.pubcrisRegistry.filter(entry => {
            const catName = catFullName(entry.category);
            const statusText = (entry.status === 'R' || entry.status === 'Registered') ? 'registered' : 'archived';
            return tokens.every(token =>
                (entry.name && entry.name.toLowerCase().includes(token)) ||
                (entry.id && String(entry.id).includes(token)) ||
                (entry.holder && entry.holder.toLowerCase().includes(token)) ||
                (catName && catName.includes(token)) ||
                (statusText && statusText.includes(token))
            );
        });

        if (apvmaInAppOnly) {
            results = results.filter(e => apvmaToProduct[String(e.id)]);
        }

        // Sort: relevance scoring — name match > id match > holder match > alphabetical
        const scoreApvmaEntry = function (entry) {
            let s = 0;
            const toks = q.split(/\s+/).filter(t => t.length > 0);
            toks.forEach(function (tok) {
                const n = (entry.name || '').toLowerCase();
                if (n === tok) s += 100;
                else if (n.startsWith(tok)) s += 60;
                else if (n.includes(tok)) s += 30;
                const idStr = String(entry.id);
                if (idStr === tok) s += 90;
                else if (idStr.startsWith(tok)) s += 50;
                const h = (entry.holder || '').toLowerCase();
                if (h.startsWith(tok)) s += 20;
                else if (h.includes(tok)) s += 10;
            });
            return s;
        };
        results.sort((a, b) => {
            const diff = scoreApvmaEntry(b) - scoreApvmaEntry(a);
            if (diff !== 0) return diff;
            return (a.name || '').localeCompare(b.name || '');
        });

        if (results.length > APVMA_PAGE_SIZE) {
            apvmaAllResults = results;
            apvmaCurrentPage = 1;
            renderApvmaPaginated(results, apvmaToProduct, q);
        } else {
            apvmaAllResults = [];
            renderApvmaResults(results, apvmaToProduct, q);
        }

    }, 250);
}

// ── Paginated rendering for large result sets ─────────────
function renderApvmaPaginated(all, apvmaToProduct, query) {
    const container = document.getElementById('apvma-results');
    const countEl = document.getElementById('apvma-result-count');
    if (!container) return;

    const start = 0;
    const end = apvmaCurrentPage * APVMA_PAGE_SIZE;
    const page = all.slice(start, end);
    const remaining = all.length - end;

    if (countEl) {
        countEl.textContent = all.length + ' record' + (all.length !== 1 ? 's' : '');
    }

    if (page.length === 0) {
        container.innerHTML = '<div class="search-prompt">No products found in the APVMA database.</div>';
        return;
    }

    // Render current page
    const tempContainer = document.createElement('div');
    const hl = window.highlightSearchTerm || function (t) { return t; };

    let html = '';
    page.forEach(r => {
        const isRegistered = r.status === 'R' || r.status === 'Registered';
        const statusColor = isRegistered ? 'var(--agri-green)' : 'var(--danger)';
        const statusIcon = isRegistered ? '✅' : '⚠️';
        const statusText = isRegistered ? 'Registered' : (r.status || 'Archived/Unknown');
        const expiryText = r.expiry ? r.expiry : 'N/A';

        let catIcon = '🧪';
        if (r.category === 'A' || r.category === 'Agricultural') catIcon = '🌾';
        if (r.category === 'V' || r.category === 'Veterinary') catIcon = '🐄';

        const appInfo = apvmaToProduct ? apvmaToProduct[String(r.id)] : null;
        const inAppBadge = appInfo ? '<span class="permit-linked-badge">🏷️ In App</span>' : '';
        const labelBtn = appInfo && appInfo.labelPdf
            ? '<a href="' + encodeURI(appInfo.labelPdf) + '" target="_blank" class="view-label-btn" style="width:100%; display:flex; justify-content:center; margin-bottom:8px;"><span class="btn-icon">📄</span> ' + appInfo.name + ' Label</a>'
            : '';

        html += `
      <div class="apvma-card">
        <div class="apvma-header">
          <div class="apvma-title">${hl(r.name, query)}${inAppBadge}</div>
          <div class="apvma-status-badge" style="background: ${statusColor}22; color: ${statusColor}; border: 1px solid ${statusColor}44;">
            ${statusIcon} ${statusText}
          </div>
        </div>
        <div class="apvma-body">
          <div class="apvma-row">
            <span class="apvma-label">APVMA ID:</span>
            <span class="apvma-value" style="font-family: monospace; font-weight: 700;">${hl(String(r.id), query)}</span>
          </div>
          <div class="apvma-row">
            <span class="apvma-label">Category:</span>
            <span class="apvma-value">${catIcon} ${r.category === 'A' ? 'Agricultural' : (r.category === 'V' ? 'Veterinary' : r.category)}</span>
          </div>
          <div class="apvma-row">
            <span class="apvma-label">Holder:</span>
            <span class="apvma-value">${hl(r.holder || 'Unknown', query)}</span>
          </div>
          <div class="apvma-row">
            <span class="apvma-label">Expiry Date:</span>
            <span class="apvma-value">${expiryText}</span>
          </div>
        </div>
        <div style="margin-top:auto; padding-top:12px;">
          ${labelBtn}
        </div>
      </div>
    `;
    });

    // Add "Load more" button if there are remaining results
    if (remaining > 0) {
        html += '<div style="text-align:center; padding:16px 0;">'
            + '<button onclick="loadMoreApvma()" style="padding:10px 24px; border-radius:10px; border:2px solid var(--agri-green,#16a34a); background:transparent; color:var(--agri-green,#16a34a); font-weight:700; font-size:0.9rem; cursor:pointer;">'
            + 'Load more (' + remaining.toLocaleString() + ' remaining)'
            + '</button>'
            + '<div style="color:var(--text-sub,#64748b); font-size:0.8rem; margin-top:6px;">Showing ' + end + ' of ' + all.length.toLocaleString() + '</div>'
            + '</div>';
    }

    container.innerHTML = html;
}

window.loadMoreApvma = function () {
    apvmaCurrentPage++;
    const apvmaToProduct = buildApvmaToProductMap();
    const input = document.getElementById('apvma-search-input');
    const q = input ? input.value.trim().toLowerCase() : '';
    renderApvmaPaginated(apvmaAllResults, apvmaToProduct, q);
};

function clearApvmaSearch() {
    const input = document.getElementById('apvma-search-input');
    if (input) {
        input.value = '';
        input.focus();
    }
    runApvmaSearch();
}

function renderApvmaResults(results, apvmaToProduct, query) {
    const hl = window.highlightSearchTerm || function (t) { return t; };
    const container = document.getElementById('apvma-results');
    if (!container) return;

    const countEl = document.getElementById('apvma-result-count');

    if (results.length === 0) {
        container.innerHTML = '<div class="search-prompt">No products found matching that query in the APVMA database.</div>';
        if (countEl) countEl.textContent = '';
        return;
    }

    if (countEl) {
        countEl.textContent = results.length + ' record' + (results.length !== 1 ? 's' : '');
    }

    let html = '';

    results.forEach(r => {
        const isRegistered = r.status === 'R' || r.status === 'Registered';
        const statusColor = isRegistered ? 'var(--agri-green)' : 'var(--danger)';
        const statusIcon = isRegistered ? '✅' : '⚠️';
        const statusText = isRegistered ? 'Registered' : (r.status || 'Archived/Unknown');
        const expiryText = r.expiry ? r.expiry : 'N/A';

        let catIcon = '🧪';
        if (r.category === 'A' || r.category === 'Agricultural') catIcon = '🌾';
        if (r.category === 'V' || r.category === 'Veterinary') catIcon = '🐄';

        const appInfo = apvmaToProduct ? apvmaToProduct[String(r.id)] : null;
        const inAppBadge = appInfo
            ? '<span class="permit-linked-badge">🏷️ In App</span>'
            : '';
        const labelBtn = appInfo && appInfo.labelPdf
            ? '<a href="' + encodeURI(appInfo.labelPdf) + '" target="_blank" class="view-label-btn" style="width:100%; display:flex; justify-content:center; margin-bottom:8px;"><span class="btn-icon">📄</span> ' + appInfo.name + ' Label</a>'
            : '';

        html += `
      <div class="apvma-card">
        <div class="apvma-header">
          <div class="apvma-title">${hl(r.name, query)}${inAppBadge}</div>
          <div class="apvma-status-badge" style="background: ${statusColor}22; color: ${statusColor}; border: 1px solid ${statusColor}44;">
            ${statusIcon} ${statusText}
          </div>
        </div>
        <div class="apvma-body">
          <div class="apvma-row">
            <span class="apvma-label">APVMA ID:</span>
            <span class="apvma-value" style="font-family: monospace; font-weight: 700;">${hl(String(r.id), query)}</span>
          </div>
          <div class="apvma-row">
            <span class="apvma-label">Category:</span>
            <span class="apvma-value">${catIcon} ${r.category === 'A' ? 'Agricultural' : (r.category === 'V' ? 'Veterinary' : r.category)}</span>
          </div>
          <div class="apvma-row">
            <span class="apvma-label">Holder:</span>
            <span class="apvma-value">${hl(r.holder || 'Unknown', query)}</span>
          </div>
          <div class="apvma-row">
            <span class="apvma-label">Expiry Date:</span>
            <span class="apvma-value">${expiryText}</span>
          </div>
        </div>
        <div style="margin-top:auto; padding-top:12px;">
          ${labelBtn}
        </div>
      </div>
    `;
    });

    container.innerHTML = html;
}
