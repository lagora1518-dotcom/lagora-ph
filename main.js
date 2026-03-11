// ─── LAGORA MAIN JS — Shared Utilities ───

// ─── PAGE TRANSITIONS ───
(function() {
  if (!document.getElementById('page-transition-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'page-transition-overlay';
    overlay.innerHTML = `
      <div class="pt-logo">
        <div class="pt-mark">L</div>
        <span class="pt-text">Lagora</span>
      </div>`;
    document.body.appendChild(overlay);
  }

  window.addEventListener('load', () => {
    const overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
      overlay.classList.add('exit');
      setTimeout(() => { overlay.style.display = 'none'; }, 600);
    }
    document.body.classList.add('page-loaded');
  });

  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('javascript')) return;
    if (link.target === '_blank') return;

    e.preventDefault();
    const overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.remove('exit');
      overlay.classList.add('enter');
    }
    setTimeout(() => { window.location.href = href; }, 380);
  });
})();

// ─── TOAST NOTIFICATIONS ───
function showToast(message, icon) {
  icon = icon || '✅';
  const existing = document.querySelector('.lagora-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'lagora-toast';
  toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span>' + message + '</span>';
  document.body.appendChild(toast);
  requestAnimationFrame(function() { toast.classList.add('show'); });
  setTimeout(function() {
    toast.classList.remove('show');
    setTimeout(function() { toast.remove(); }, 400);
  }, 3200);
}

// ─── WISHLIST ───
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('lagora_wishlist') || '[]'); } catch(e) { return []; }
}
function saveWishlist(wl) {
  try { localStorage.setItem('lagora_wishlist', JSON.stringify(wl)); } catch(e) {}
}
function toggleWishlist(id, name, btn) {
  var wl = getWishlist();
  var idx = wl.indexOf(id);
  if (idx === -1) {
    wl.push(id);
    if (btn) btn.classList.add('active');
    showToast('"' + name + '" saved to wishlist!', '❤️');
  } else {
    wl.splice(idx, 1);
    if (btn) btn.classList.remove('active');
    showToast('Removed from wishlist', '🤍');
  }
  saveWishlist(wl);
  updateWishlistCount();
}
function updateWishlistCount() {
  var wl = getWishlist();
  document.querySelectorAll('.wishlist-count').forEach(function(badge) {
    badge.style.display = wl.length ? 'flex' : 'none';
    badge.textContent = wl.length;
  });
}

// ─── SEARCH HANDLER ───
function initSearch() {
  var form = document.getElementById('search-form');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  if (!form || !input) return;

  if (results) {
    input.addEventListener('input', function() {
      var q = input.value.trim().toLowerCase();
      if (q.length < 2) { results.classList.remove('open'); return; }
      var products = (typeof PRODUCTS !== 'undefined') ? PRODUCTS : [];
      var matches = products
        .filter(function(p) {
          return p.name.toLowerCase().includes(q) || p.seller.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
        })
        .slice(0, 6);
      if (!matches.length) { results.classList.remove('open'); return; }
      results.innerHTML = matches.map(function(p) {
        return '<div class="search-result-item" onclick="window.location=\'product.html?id=' + p.id + '\'">' +
          '<div class="search-result-emoji">' + p.emoji + '</div>' +
          '<div class="search-result-info">' +
          '<div class="name">' + p.name + '</div>' +
          '<div class="meta">' + p.seller + ' · 📍 ' + p.location + '</div>' +
          '</div>' +
          '<span class="search-result-price">₱' + p.price.toLocaleString() + '</span>' +
          '</div>';
      }).join('');
      results.classList.add('open');
    });
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.search-bar')) results.classList.remove('open');
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var q = input.value.trim();
    if (q) window.location = 'shop.html?q=' + encodeURIComponent(q);
  });
}

// ─── SCROLL REVEAL ───
function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e, i) {
      if (e.isIntersecting) {
        setTimeout(function() { e.target.classList.add('visible'); }, i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
}

// ─── INIT ON DOM READY ───
document.addEventListener('DOMContentLoaded', function() {
  updateWishlistCount();
  initSearch();
  initScrollReveal();
});
