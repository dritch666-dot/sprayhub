// ══════════════════════════════════════════════════════════
//  Thumbnail Loader v2 — local-first, verified API fallback
//  Cards with `thumbnail` field show local images instantly.
//  Cards without try Wikipedia exact match + iNat verified.
//  Desktop version only.
// ══════════════════════════════════════════════════════════

(function () {
  'use strict';

  var THUMB_SIZE = 160;
  var WIKI_API = 'https://en.wikipedia.org/w/api.php';
  var INAT_API = 'https://api.inaturalist.org/v1/taxa';
  var cache = {};
  var pending = {};
  var BATCH_DELAY = 100;
  var queue = [];
  var timerRunning = false;

  // ── Public API ─────────────────────────────────────────
  window.getWikiThumb = function (scientificName, commonName, imgElementId) {
    var sci = (scientificName || '').trim();
    var com = (commonName || '').trim();
    if (!sci && !com) return;

    var key = sci + '||' + com;

    if (cache[key]) {
      if (cache[key].status === 'ok') setThumbSrc(imgElementId, cache[key].url);
      return;
    }

    if (pending[key]) {
      pending[key].push(imgElementId);
      return;
    }
    pending[key] = [imgElementId];

    queue.push({ sci: sci, com: com, key: key });
    if (!timerRunning) processQueue();
  };

  function processQueue() {
    if (queue.length === 0) { timerRunning = false; return; }
    timerRunning = true;
    var item = queue.shift();
    runChain(item);
    setTimeout(processQueue, BATCH_DELAY);
  }

  // ── Verified fallback chain ────────────────────────────
  function runChain(item) {
    var sci = cleanSci(item.sci);
    var sciBase = baseName(sci);
    var com = item.com;
    var key = item.key;

    var strategies = [];

    // Wikipedia exact title — most reliable
    if (sci) strategies.push(function () { return wikiExact(sci); });
    if (sciBase && sciBase !== sci) strategies.push(function () { return wikiExact(sciBase); });
    if (com) strategies.push(function () { return wikiExact(com); });

    // iNaturalist verified — confirms taxon name matches
    if (sci) strategies.push(function () { return inatVerified(sci, sci, com); });
    if (com) strategies.push(function () { return inatVerified(com, sci, com); });

    tryNext(strategies, 0, key);
  }

  function tryNext(strategies, idx, key) {
    if (idx >= strategies.length) { resolve(key, null); return; }
    strategies[idx]()
      .then(function (url) {
        if (url) resolve(key, url);
        else tryNext(strategies, idx + 1, key);
      })
      .catch(function () { tryNext(strategies, idx + 1, key); });
  }

  // ── Wikipedia exact title ──────────────────────────────
  function wikiExact(title) {
    var t = title.replace(/\s+/g, '_');
    var url = WIKI_API + '?action=query&titles=' + encodeURIComponent(t)
      + '&prop=pageimages&format=json&pithumbsize=' + THUMB_SIZE
      + '&redirects=1&origin=*';
    return fetch(url).then(function (r) { return r.json(); }).then(extractWiki);
  }

  function extractWiki(data) {
    if (!data || !data.query || !data.query.pages) return null;
    var pages = data.query.pages;
    for (var k in pages) {
      if (pages[k].missing !== undefined) continue;
      if (pages[k].thumbnail && pages[k].thumbnail.source) return pages[k].thumbnail.source;
    }
    return null;
  }

  // ── iNaturalist VERIFIED ───────────────────────────────
  function inatVerified(searchTerm, expectedSci, expectedCom) {
    var url = INAT_API + '?q=' + encodeURIComponent(searchTerm)
      + '&per_page=5&order=desc&order_by=observations_count';
    var expSci = (expectedSci || '').toLowerCase();
    var expBase = baseName(expSci);
    var expCom = (expectedCom || '').toLowerCase();

    return fetch(url).then(function (r) { return r.json(); }).then(function (data) {
      if (!data || !data.results) return null;
      for (var i = 0; i < data.results.length; i++) {
        var t = data.results[i];
        if (!t.default_photo) continue;
        var tName = (t.name || '').toLowerCase();
        var tCom = (t.preferred_common_name || '').toLowerCase();

        var match = false;
        if (expSci && tName && (tName === expSci || tName === expBase)) match = true;
        if (!match && expBase && tName && tName.indexOf(expBase) === 0) match = true;
        if (!match && expCom && (tCom === expCom)) match = true;
        if (!match && expCom && expCom.length > 4 && tCom && tCom.indexOf(expCom) >= 0) match = true;

        if (match) return t.default_photo.medium_url || t.default_photo.square_url || null;
      }
      return null;
    });
  }

  // ── Name helpers ───────────────────────────────────────
  function cleanSci(n) {
    return (n || '').replace(/\s+var\.\s+/g,' ').replace(/\s+subsp\.\s+/g,' ')
      .replace(/\s+f\.\s+/g,' ').replace(/\s+spp?\.\s*/g,' ')
      .replace(/\s+×\s+/g,' ').replace(/\s*\(.*?\)/g,'').trim();
  }
  function baseName(s) {
    if (!s) return '';
    var p = s.split(/\s+/);
    return p.length >= 2 ? p[0] + ' ' + p[1] : s;
  }

  // ── Resolve + DOM ──────────────────────────────────────
  function resolve(key, url) {
    cache[key] = url ? { url: url, status: 'ok' } : { url: null, status: 'none' };
    var ids = pending[key] || [];
    delete pending[key];
    for (var i = 0; i < ids.length; i++) {
      if (url) setThumbSrc(ids[i], url);
      else hideThumb(ids[i]);
    }
  }

  function setThumbSrc(id, url) {
    var el = document.getElementById(id);
    if (!el) return;
    el.src = url;
    el.style.display = 'block';
    var wrap = el.closest('.wiki-thumb-wrap');
    if (wrap) wrap.style.display = 'block';
  }

  function hideThumb(id) {
    var el = document.getElementById(id);
    if (!el) return;
    // Never hide a thumbnail that already has a local image loaded
    if (el.src && el.src.indexOf('images/') >= 0) return;
    var wrap = el.closest('.wiki-thumb-wrap');
    if (wrap) wrap.style.display = 'none';
  }

})();
