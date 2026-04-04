// State
let chemicalCount = 0;
let deferredPrompt = null;

// Theme
if (localStorage.getItem('calcTheme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle').innerText = '☀️';
}

// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => { });
}

// Toast
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
}

// Calculators Dropdown
function toggleCalcMenu(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('calc-menu').parentElement;
    dropdown.classList.toggle('open');
    // Close the other dropdown
    const toolsDropdown = document.getElementById('tools-menu').parentElement;
    if (toolsDropdown) toolsDropdown.classList.remove('open');
}

function closeCalcMenu() {
    const dropdown = document.getElementById('calc-menu');
    if (dropdown) dropdown.parentElement.classList.remove('open');
}

// Tools Dropdown
function toggleToolsMenu(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('tools-menu').parentElement;
    dropdown.classList.toggle('open');
    // Close the other dropdown
    const calcDropdown = document.getElementById('calc-menu').parentElement;
    if (calcDropdown) calcDropdown.classList.remove('open');
}

function closeToolsMenu() {
    const dropdown = document.getElementById('tools-menu');
    if (dropdown) dropdown.parentElement.classList.remove('open');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    document.querySelectorAll('.tools-dropdown').forEach(function(dropdown) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});

// Copy to Clipboard
async function copyToClipboard(id) {
    const text = document.getElementById(id).innerText;
    try {
        await navigator.clipboard.writeText(text);
        showToast('✓ Copied!');
    } catch (e) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✓ Copied!');
    }
}

// History
function saveHistory(type, details, result) {
    const item = { id: Date.now(), type, details, result, date: new Date().toLocaleTimeString() };
    let history = JSON.parse(localStorage.getItem('calcHistory') || '[]');
    if (history.length > 0 && history[0].details === details) return;
    history.unshift(item);
    if (history.length > 50) history.pop();
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

function renderHistoryFull() {
    const history = JSON.parse(localStorage.getItem('calcHistory') || '[]');
    document.getElementById('history-count').innerText = `${history.length} item${history.length !== 1 ? 's' : ''}`;
    const container = document.getElementById('history-full');
    if (history.length === 0) {
        container.innerHTML = '<div class="no-history">No history yet</div>';
        return;
    }
    container.innerHTML = history.map(h => `
<div class="history-item">
<div class="history-item-type">${h.type}</div>
<div class="history-item-result">${h.result}</div>
<div class="history-item-time">${h.date}</div>
</div>
`).join('');
}

function clearHistory() {
    if (confirm('Clear all history?')) {
        localStorage.removeItem('calcHistory');
        renderHistoryFull();
        showToast('History cleared');
    }
}

// Theme Toggle
function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('calcTheme', isDark ? 'light' : 'dark');
    document.querySelector('.theme-toggle').innerText = isDark ? '🌙' : '☀️';
}

// PWA Install — deferred prompt stored for About panel button
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Show install button in About panel + footer
    var aboutBtn = document.getElementById('about-install-btn');
    var aboutDone = document.getElementById('about-install-done');
    var footerBtn = document.getElementById('footer-install-btn');
    if (aboutBtn) aboutBtn.style.display = 'block';
    if (aboutDone) aboutDone.style.display = 'none';
    if (footerBtn) footerBtn.style.display = 'inline-block';
});

window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    var aboutBtn = document.getElementById('about-install-btn');
    var aboutDone = document.getElementById('about-install-done');
    var footerBtn = document.getElementById('footer-install-btn');
    if (aboutBtn) aboutBtn.style.display = 'none';
    if (aboutDone) aboutDone.style.display = 'block';
    if (footerBtn) footerBtn.style.display = 'none';
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
            deferredPrompt = null;
            var aboutBtn = document.getElementById('about-install-btn');
            var aboutDone = document.getElementById('about-install-done');
            var footerBtn = document.getElementById('footer-install-btn');
            if (aboutBtn) aboutBtn.style.display = 'none';
            if (aboutDone) aboutDone.style.display = 'block';
            if (footerBtn) footerBtn.style.display = 'none';
        });
    }
}

function dismissInstall() {
    document.getElementById('install-prompt').classList.remove('show');
}

// Panel Navigation (Legacy panels are now Modal Overlays over the main ag view)
function openPanel(panel) {
    if (panel === 'agri') return; // Should not happen in new UI, handle gracefully

    const overlay = document.getElementById('modal-overlay');

    // Hide all internal modal panels first
    document.querySelectorAll('.calculator-panel').forEach(p => p.classList.add('hidden'));

    // Show the specific requested panel
    const targetPanel = document.getElementById('panel-' + panel);
    if (targetPanel) {
        targetPanel.classList.remove('hidden');
    }

    // Show the dark overlay backdrop
    if (overlay) {
        overlay.classList.remove('hidden');
    }

    if (panel === 'history') renderHistoryFull();
}

function closePanel() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

function closeModalOnBackdrop(e) {
    // If the click is precisely on the dark background (not inside the modal content box)
    if (e.target.id === 'modal-overlay') {
        closePanel();
    }
}

// Keyboard Support
document.addEventListener('keydown', (e) => {
    // Always allow escape to close modal
    if (e.key === 'Escape') { e.preventDefault(); closePanel(); }

    if (!document.getElementById('panel-calc') || document.getElementById('panel-calc').classList.contains('hidden') || document.getElementById('modal-overlay').classList.contains('hidden')) return;

    // Calc specific bindings
    if (/[0-9]/.test(e.key)) { e.preventDefault(); appendCalc(e.key); }
    if (['+', '-', '*', '/', '%', '.'].includes(e.key)) { e.preventDefault(); appendCalc(e.key); }
    if (e.key === 'Enter' || e.key === '=') { e.preventDefault(); calculateResult(); }
    if (e.key === 'Backspace') { e.preventDefault(); deleteChar(); }
});

// Init
window.onload = function () {
    updateUnits();
    // Initialize the new default home view immediately
    switchAgriSubTab('search');
};