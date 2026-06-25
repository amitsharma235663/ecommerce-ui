/* ============================================================
   LUXE E-Commerce — script.js
   Premium Vanilla JS — No Frameworks
============================================================ */

'use strict';

/* -------------------------------------------------------
   PRODUCT DATA — 24 products across 5 categories
------------------------------------------------------- */
const PRODUCTS = [
  // ── Electronics ─────────────────────────────────────
  {
    id: 1, name: 'Pro Wireless Headphones', category: 'electronics',
    price: 249.99, original: 329.99,
    rating: 4.8, reviews: 2341,
    badge: 'hot',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    desc: 'Studio-grade sound with 40-hour battery life and active noise cancellation. Foldable design for travel.'
  },
  {
    id: 2, name: 'Smart Watch Series X', category: 'electronics',
    price: 399.00, original: 499.00,
    rating: 4.9, reviews: 1892,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    desc: 'Always-on AMOLED display, health monitoring, GPS, and 7-day battery. Water-resistant to 50m.'
  },
  {
    id: 3, name: 'Mechanical Gaming Keyboard', category: 'electronics',
    price: 159.99, original: 199.99,
    rating: 4.7, reviews: 984,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&q=80',
    desc: 'Per-key RGB, Cherry MX switches, aluminum body with dedicated media controls.'
  },
  {
    id: 4, name: 'Ultrawide Monitor 34"', category: 'electronics',
    price: 799.00, original: 999.00,
    rating: 4.6, reviews: 672,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80',
    desc: 'IPS panel, 144Hz refresh rate, HDR400, USB-C 90W charging. Perfect for creators and gamers.'
  },
  {
    id: 5, name: 'Portable SSD 2TB', category: 'electronics',
    price: 129.00, original: 179.00,
    rating: 4.8, reviews: 3210,
    badge: null,
    img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80',
    desc: '2000 MB/s read speed, shock-resistant, fits in your pocket. Works with PC, Mac, iPhone.'
  },

  // ── Fashion ─────────────────────────────────────────
  {
    id: 6, name: 'Merino Wool Overcoat', category: 'fashion',
    price: 389.00, original: 520.00,
    rating: 4.9, reviews: 431,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80',
    desc: '100% extra-fine merino wool. Timeless silhouette with interior pockets. Dry clean only.'
  },
  {
    id: 7, name: 'Slim-Fit Dress Shirt', category: 'fashion',
    price: 89.00, original: null,
    rating: 4.5, reviews: 1204,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80',
    desc: 'Non-iron cotton twill, spread collar. Machine washable and wrinkle-resistant.'
  },
  {
    id: 8, name: 'Selvedge Denim Jeans', category: 'fashion',
    price: 195.00, original: 245.00,
    rating: 4.7, reviews: 856,
    badge: null,
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
    desc: 'Japanese selvedge denim, 14oz, slim straight cut. Made to age beautifully.'
  },
  {
    id: 9, name: 'Cashmere Turtleneck', category: 'fashion',
    price: 220.00, original: 280.00,
    rating: 4.8, reviews: 562,
    badge: 'hot',
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
    desc: 'Grade-A Mongolian cashmere, ribbed cuffs and hem. Unmatched softness for autumn and winter.'
  },

  // ── Shoes ────────────────────────────────────────────
  {
    id: 10, name: 'Trail Running Sneakers', category: 'shoes',
    price: 169.00, original: 220.00,
    rating: 4.9, reviews: 2789,
    badge: 'hot',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    desc: 'Vibram® outsole, waterproof upper, recycled materials. Grippy on any terrain.'
  },
  {
    id: 11, name: 'Oxford Leather Derby', category: 'shoes',
    price: 299.00, original: null,
    rating: 4.6, reviews: 320,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1607522370275-f6fd7d9c3e9f?w=400&q=80',
    desc: 'Full-grain calf leather, hand-stitched Goodyear welt. Hand-polished finish.'
  },
  {
    id: 12, name: 'High-Top Canvas Shoes', category: 'shoes',
    price: 79.00, original: 99.00,
    rating: 4.4, reviews: 1450,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&q=80',
    desc: 'Vulcanized rubber sole, cotton canvas upper, vintage-inspired silhouette. Available in 12 colors.'
  },
  {
    id: 13, name: 'Suede Chelsea Boots', category: 'shoes',
    price: 245.00, original: 310.00,
    rating: 4.7, reviews: 688,
    badge: null,
    img: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&q=80',
    desc: 'Italian suede upper, elastic gussets, crepe rubber sole. A true wardrobe staple.'
  },

  // ── Watches ──────────────────────────────────────────
  {
    id: 14, name: 'Pilot Chronograph', category: 'watches',
    price: 599.00, original: 799.00,
    rating: 4.9, reviews: 234,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80',
    desc: 'ETA 7750 automatic movement, 60-hour power reserve, sapphire crystal, 100m water resistance.'
  },
  {
    id: 15, name: 'Minimalist Field Watch', category: 'watches',
    price: 349.00, original: null,
    rating: 4.7, reviews: 510,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80',
    desc: 'Swiss automatic movement, 36mm case, sapphire crystal, NATO strap included. Uncluttered dial.'
  },
  {
    id: 16, name: 'Luxury Dive Watch', category: 'watches',
    price: 899.00, original: 1199.00,
    rating: 4.8, reviews: 178,
    badge: 'hot',
    img: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&q=80',
    desc: '300m water resistance, unidirectional bezel, luminous markers, helium escape valve.'
  },
  {
    id: 17, name: 'Dress Watch Gold', category: 'watches',
    price: 749.00, original: 950.00,
    rating: 4.9, reviews: 132,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    desc: 'Gilt dial, 18k gold-plated case, leather strap. Swiss quartz, ultra-thin 6mm profile.'
  },

  // ── Accessories ──────────────────────────────────────
  {
    id: 18, name: 'Italian Leather Wallet', category: 'accessories',
    price: 89.00, original: 120.00,
    rating: 4.6, reviews: 1876,
    badge: null,
    img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80',
    desc: 'Full-grain vegetable-tanned leather, 6 card slots, cash compartment, slim profile.'
  },
  {
    id: 19, name: 'Titanium Sunglasses', category: 'accessories',
    price: 199.00, original: 260.00,
    rating: 4.8, reviews: 734,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80',
    desc: 'Lightweight titanium frame, polarized lenses, UV400 protection. Scratch-resistant coating.'
  },
  {
    id: 20, name: 'Canvas Weekender Bag', category: 'accessories',
    price: 159.00, original: null,
    rating: 4.7, reviews: 945,
    badge: 'hot',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    desc: 'Waxed cotton canvas, full-grain leather handles, YKK zippers. 45L capacity.'
  },
  {
    id: 21, name: 'Silk Pocket Square', category: 'accessories',
    price: 49.00, original: 65.00,
    rating: 4.4, reviews: 282,
    badge: null,
    img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80',
    desc: 'Hand-rolled edges, 100% silk twill, hand-printed in Como, Italy.'
  },
  {
    id: 22, name: 'Merino Beanie Hat', category: 'accessories',
    price: 55.00, original: 70.00,
    rating: 4.5, reviews: 612,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&q=80',
    desc: 'Ribbed knit, 100% Merino wool. Naturally temperature-regulating and odour-resistant.'
  },
  {
    id: 23, name: 'Leather Belt Classic', category: 'accessories',
    price: 75.00, original: null,
    rating: 4.6, reviews: 1123,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    desc: 'Full-grain leather, solid brass buckle, single-stitch edge. Will outlast any trend.'
  },
  {
    id: 24, name: 'Monogrammed Cufflinks', category: 'accessories',
    price: 99.00, original: 130.00,
    rating: 4.7, reviews: 198,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    desc: 'Sterling silver with enamel face. A refined finishing touch for formal occasions.'
  },
];

/* -------------------------------------------------------
   STATE
------------------------------------------------------- */
let state = {
  cart: [],
  wishlist: [],
  activeCategory: 'all',
  searchQuery: '',
  priceMin: 0,
  priceMax: 1000,
  visibleCount: 12,   // products shown before "Load More"
  batchSize: 8,
};

/* -------------------------------------------------------
   DOM HELPERS
------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* -------------------------------------------------------
   LOCAL STORAGE
------------------------------------------------------- */
function saveState() {
  localStorage.setItem('luxe_cart', JSON.stringify(state.cart));
  localStorage.setItem('luxe_wishlist', JSON.stringify(state.wishlist));
}

function loadState() {
  try {
    const cart = localStorage.getItem('luxe_cart');
    const wl = localStorage.getItem('luxe_wishlist');
    if (cart) state.cart = JSON.parse(cart);
    if (wl) state.wishlist = JSON.parse(wl);
  } catch (e) {
    state.cart = [];
    state.wishlist = [];
  }
}

/* -------------------------------------------------------
   LOADER
------------------------------------------------------- */
function initLoader() {
  const loader = $('#loader');
  // Wait for fonts + minimal delay for polish
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    // Trigger counter animations after loader hides
    setTimeout(animateCounters, 300);
  }, 1800);
}

/* -------------------------------------------------------
   THEME TOGGLE
------------------------------------------------------- */
function initTheme() {
  const saved = localStorage.getItem('luxe_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('luxe_theme', next);
}

/* -------------------------------------------------------
   SCROLL PROGRESS
------------------------------------------------------- */
function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const pct = scrollable > 0 ? (scrolled / scrollable) * 100 : 0;
  $('#scroll-progress').style.width = pct + '%';
}

/* -------------------------------------------------------
   NAVBAR SCROLL + ACTIVE LINK
------------------------------------------------------- */
function handleNavScroll() {
  const nav = $('#navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);

  // Update active nav link based on scroll position
  const sections = $$('section[id], div[id="shop"]');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 80) current = section.getAttribute('id');
  });

  $$('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });

  // Back to top button
  $('#back-to-top').classList.toggle('hidden', window.scrollY < 300);
}

/* -------------------------------------------------------
   HAMBURGER MENU
------------------------------------------------------- */
function initHamburger() {
  const btn = $('#hamburger');
  const links = $('.nav-links');

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on link click
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
    });
  });
}

/* -------------------------------------------------------
   SEARCH
------------------------------------------------------- */
function initSearch() {
  const toggle = $('#search-toggle');
  const container = $('#search-bar-container');
  const input = $('#search-input');
  const close = $('#search-close');

  toggle.addEventListener('click', () => {
    const open = container.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    container.setAttribute('aria-hidden', !open);
    if (open) setTimeout(() => input.focus(), 300);
  });

  close.addEventListener('click', () => {
    container.classList.remove('open');
    input.value = '';
    state.searchQuery = '';
    renderProducts();
  });

  input.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    state.visibleCount = 12;
    renderProducts();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      container.classList.remove('open');
      input.value = '';
      state.searchQuery = '';
    }
  });
}

/* -------------------------------------------------------
   CATEGORY FILTERS
------------------------------------------------------- */
function initCategoryFilters() {
  const container = $('#category-filters');
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeCategory = btn.dataset.category;
    state.visibleCount = 12;
    renderProducts();
    // Scroll to shop
    $('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Footer category links
  $$('[data-category-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.categoryLink;
      state.activeCategory = cat;
      $$('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.category === cat);
      });
      state.visibleCount = 12;
      renderProducts();
      $('#shop').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* -------------------------------------------------------
   PRICE FILTER
------------------------------------------------------- */
function initPriceFilter() {
  const minSlider = $('#price-min');
  const maxSlider = $('#price-max');
  const display = $('#price-display');

  function updatePrice() {
    let min = parseInt(minSlider.value);
    let max = parseInt(maxSlider.value);
    if (min > max) [min, max] = [max, min];
    state.priceMin = min;
    state.priceMax = max;
    display.textContent = `$${min} — $${max}`;
    renderProducts();
  }

  minSlider.addEventListener('input', updatePrice);
  maxSlider.addEventListener('input', updatePrice);
}

/* -------------------------------------------------------
   PRODUCT FILTERING
------------------------------------------------------- */
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const catMatch = state.activeCategory === 'all' || p.category === state.activeCategory;
    const query = state.searchQuery;
    const searchMatch = !query ||
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    const priceMatch = p.price >= state.priceMin && p.price <= state.priceMax;
    return catMatch && searchMatch && priceMatch;
  });
}

/* -------------------------------------------------------
   STAR RATING GENERATOR
------------------------------------------------------- */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* -------------------------------------------------------
   BADGE HTML
------------------------------------------------------- */
function badgeHTML(badge) {
  if (!badge) return '';
  const labels = { new: 'New', sale: 'Sale', hot: '🔥 Hot' };
  return `<span class="badge badge-${badge}">${labels[badge] || badge}</span>`;
}

/* -------------------------------------------------------
   PRODUCT CARD HTML
------------------------------------------------------- */
function productCardHTML(p, idx) {
  const inWishlist = state.wishlist.some(w => w.id === p.id);
  const discountPct = p.original ? Math.round((1 - p.price / p.original) * 100) : 0;
  const delay = (idx % state.batchSize) * 60; // staggered animation

  return `
    <article class="product-card" data-id="${p.id}" style="animation-delay:${delay}ms" role="article" aria-label="${p.name}">
      <!-- Badges -->
      <div class="product-badge">
        ${badgeHTML(p.badge)}
      </div>

      <!-- Wishlist -->
      <button class="wishlist-toggle ${inWishlist ? 'active' : ''}"
        data-id="${p.id}" aria-label="${inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}"
        aria-pressed="${inWishlist}">
        ♥
      </button>

      <!-- Image -->
      <div class="product-img-wrapper">
        <img
          src="${p.img}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x400/8B5CF6/ffffff?text=LUXE'"
        />
        <button class="quick-view-btn" data-id="${p.id}">⚡ Quick View</button>
      </div>

      <!-- Info -->
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars" aria-label="${p.rating} out of 5 stars">${renderStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">$${p.price.toFixed(2)}</span>
            ${p.original ? `<span class="product-original">$${p.original.toFixed(2)}</span>` : ''}
          </div>
          ${discountPct > 0 ? `<span class="product-discount">-${discountPct}%</span>` : ''}
        </div>
        <button class="add-to-cart-btn ripple" data-id="${p.id}" aria-label="Add ${p.name} to cart">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

/* -------------------------------------------------------
   SKELETON LOADER
------------------------------------------------------- */
function skeletonHTML(count = 8) {
  return Array.from({ length: count }, () => `
    <div class="skeleton-card" aria-hidden="true">
      <div class="skeleton skeleton-img"></div>
      <div style="padding:1rem">
        <div class="skeleton skeleton-text w-40" style="margin-bottom:8px"></div>
        <div class="skeleton skeleton-text w-80" style="margin-bottom:8px"></div>
        <div class="skeleton skeleton-text w-60" style="margin-bottom:8px"></div>
        <div class="skeleton skeleton-text w-40"></div>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------
   RENDER PRODUCTS
------------------------------------------------------- */
function renderProducts(initial = false) {
  const grid = $('#product-grid');
  const noResults = $('#no-results');
  const loadMoreBtn = $('#load-more-btn');

  if (initial) {
    grid.innerHTML = skeletonHTML(12);
    setTimeout(() => renderProducts(), 800);
    return;
  }

  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, state.visibleCount);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    loadMoreBtn.classList.add('hidden');
    return;
  }

  noResults.classList.add('hidden');
  grid.innerHTML = visible.map((p, i) => productCardHTML(p, i)).join('');

  // Show/hide Load More
  if (state.visibleCount >= filtered.length) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
    loadMoreBtn.textContent = `Load More (${filtered.length - state.visibleCount} left)`;
  }

  // Bind card events
  grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });

  grid.querySelectorAll('.wishlist-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });

  grid.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(parseInt(btn.dataset.id));
    });
  });
}

/* -------------------------------------------------------
   LOAD MORE
------------------------------------------------------- */
function initLoadMore() {
  $('#load-more-btn').addEventListener('click', () => {
    state.visibleCount += state.batchSize;
    renderProducts();
  });
}

/* -------------------------------------------------------
   CART LOGIC
------------------------------------------------------- */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  saveState();
  updateCartUI();
  showToast(`✅ "${product.name}" added to cart!`);
  animateCartIcon();
}

function removeFromCart(productId) {
  const product = state.cart.find(i => i.id === productId);
  state.cart = state.cart.filter(item => item.id !== productId);
  saveState();
  updateCartUI();
  if (product) showToast(`🗑️ "${product.name}" removed from cart`);
}

function updateQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveState();
  updateCartUI();
}

function clearCart() {
  state.cart = [];
  saveState();
  updateCartUI();
  showToast('🧹 Cart cleared');
}

function getCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + tax + shipping;
  return { subtotal, tax, shipping, total };
}

function updateCartUI() {
  // Count badge
  const count = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const countEl = $('#cart-count');
  countEl.textContent = count;
  countEl.classList.toggle('show', count > 0);

  // Cart items HTML
  const cartItemsEl = $('#cart-items');
  const emptyEl = $('#cart-empty');
  const footerEl = $('#cart-footer');

  if (state.cart.length === 0) {
    cartItemsEl.innerHTML = '';
    emptyEl.classList.remove('hidden');
    footerEl.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  footerEl.classList.remove('hidden');

  cartItemsEl.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}"
          onerror="this.src='https://via.placeholder.com/70x70/8B5CF6/fff?text=LUXE'" />
      </div>
      <div class="cart-item-details">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</p>
        <div class="cart-item-qty">
          <button class="qty-btn qty-minus" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-num" aria-label="Quantity ${item.qty}">${item.qty}</span>
          <button class="qty-btn qty-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove ${item.name} from cart">✕</button>
    </div>
  `).join('');

  // Bind qty buttons
  cartItemsEl.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), -1));
  });
  cartItemsEl.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), 1));
  });
  cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });

  // Totals
  const { subtotal, tax, shipping, total } = getCartTotals();
  $('#cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  $('#cart-tax').textContent = `$${tax.toFixed(2)}`;
  $('#cart-shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
  $('#cart-total').textContent = `$${total.toFixed(2)}`;
}

function animateCartIcon() {
  const cartBtn = $('#cart-toggle');
  cartBtn.style.transform = 'scale(1.3)';
  setTimeout(() => (cartBtn.style.transform = ''), 200);
}

/* -------------------------------------------------------
   CART SIDEBAR
------------------------------------------------------- */
function initCartSidebar() {
  const sidebar = $('#cart-sidebar');
  const overlay = $('#cart-overlay');

  $('#cart-toggle').addEventListener('click', () => openSidebar(sidebar, overlay));
  $('#cart-close').addEventListener('click', () => closeSidebar(sidebar, overlay));
  overlay.addEventListener('click', () => closeSidebar(sidebar, overlay));

  $('#clear-cart-btn').addEventListener('click', clearCart);
  $('#empty-cart-shop').addEventListener('click', () => {
    closeSidebar(sidebar, overlay);
    $('#shop').scrollIntoView({ behavior: 'smooth' });
  });

  $('#checkout-btn').addEventListener('click', () => {
    if (state.cart.length === 0) return;
    closeSidebar(sidebar, overlay);
    openCheckoutPopup();
  });
}

function openSidebar(sidebar, overlay) {
  sidebar.classList.add('open');
  overlay.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeSidebar(sidebar, overlay) {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

/* -------------------------------------------------------
   WISHLIST
------------------------------------------------------- */
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const exists = state.wishlist.some(w => w.id === productId);
  if (exists) {
    state.wishlist = state.wishlist.filter(w => w.id !== productId);
    showToast(`💔 Removed from wishlist`);
  } else {
    state.wishlist.push(product);
    showToast(`❤️ "${product.name}" added to wishlist!`);
  }

  saveState();
  updateWishlistUI();
  renderProducts(); // Refresh heart buttons in grid
}

function updateWishlistUI() {
  const count = state.wishlist.length;
  const countEl = $('#wishlist-count');
  countEl.textContent = count;
  countEl.classList.toggle('show', count > 0);

  const wishlistItems = $('#wishlist-items');
  const emptyEl = $('#wishlist-empty');

  if (state.wishlist.length === 0) {
    wishlistItems.innerHTML = '';
    emptyEl.classList.remove('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  wishlistItems.innerHTML = state.wishlist.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}"
          onerror="this.src='https://via.placeholder.com/70x70/8B5CF6/fff?text=LUXE'" />
      </div>
      <div class="cart-item-details">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <button class="btn btn-primary ripple" style="font-size:0.75rem;padding:0.4rem 0.9rem;margin-top:0.5rem"
          data-add-id="${item.id}">Add to Cart</button>
      </div>
      <button class="cart-item-remove" data-wl-remove="${item.id}" aria-label="Remove from wishlist">✕</button>
    </div>
  `).join('');

  wishlistItems.querySelectorAll('[data-add-id]').forEach(btn => {
    btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.addId)));
  });

  wishlistItems.querySelectorAll('[data-wl-remove]').forEach(btn => {
    btn.addEventListener('click', () => toggleWishlist(parseInt(btn.dataset.wlRemove)));
  });
}

function initWishlistSidebar() {
  const sidebar = $('#wishlist-sidebar');
  const overlay = $('#wishlist-overlay');

  $('#wishlist-btn').addEventListener('click', () => openSidebar(sidebar, overlay));
  $('#wishlist-close').addEventListener('click', () => closeSidebar(sidebar, overlay));
  overlay.addEventListener('click', () => closeSidebar(sidebar, overlay));
}

/* -------------------------------------------------------
   QUICK VIEW MODAL
------------------------------------------------------- */
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const discountPct = product.original
    ? Math.round((1 - product.price / product.original) * 100)
    : 0;

  const inWishlist = state.wishlist.some(w => w.id === product.id);

  $('#modal-body').innerHTML = `
    <div class="modal-img">
      <img src="${product.img}" alt="${product.name}"
        onerror="this.src='https://via.placeholder.com/400x400/8B5CF6/ffffff?text=LUXE'" />
    </div>
    <div class="modal-info">
      <p class="modal-category">${product.category}</p>
      <h2 class="modal-name">${product.name}</h2>
      <div class="product-rating">
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-count">(${product.reviews.toLocaleString()} reviews)</span>
      </div>
      <div style="display:flex;align-items:center;gap:1rem">
        <span class="modal-price">$${product.price.toFixed(2)}</span>
        ${product.original ? `<span class="product-original">$${product.original.toFixed(2)}</span>` : ''}
        ${discountPct > 0 ? `<span class="product-discount">-${discountPct}%</span>` : ''}
      </div>
      <p class="modal-desc">${product.desc}</p>
      <div class="modal-actions">
        <button class="btn btn-primary ripple w-full" id="modal-add-cart" data-id="${product.id}">
          Add to Cart
        </button>
        <button class="btn btn-ghost w-full" id="modal-wl" data-id="${product.id}">
          ${inWishlist ? '❤️ Remove from Wishlist' : '♡ Add to Wishlist'}
        </button>
      </div>
    </div>
  `;

  $('#modal-overlay').classList.remove('hidden');
  document.body.classList.add('no-scroll');

  $('#modal-add-cart').addEventListener('click', () => {
    addToCart(product.id);
    closeModal();
  });

  $('#modal-wl').addEventListener('click', () => {
    toggleWishlist(product.id);
    closeModal();
  });
}

function closeModal() {
  $('#modal-overlay').classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

function initModal() {
  $('#modal-overlay').addEventListener('click', (e) => {
    if (e.target === $('#modal-overlay')) closeModal();
  });
  $('#modal-close').addEventListener('click', closeModal);
}

/* -------------------------------------------------------
   CHECKOUT POPUP
------------------------------------------------------- */
function openCheckoutPopup() {
  const orderNum = Math.floor(Math.random() * 900000) + 100000;
  $('#order-number').textContent = orderNum;

  const popup = $('#checkout-overlay');
  popup.classList.remove('hidden');
  document.body.classList.add('no-scroll');

  // Clear cart after checkout
  setTimeout(() => {
    state.cart = [];
    saveState();
    updateCartUI();
  }, 500);
}

function initCheckoutPopup() {
  $('#checkout-continue').addEventListener('click', () => {
    $('#checkout-overlay').classList.add('hidden');
    document.body.classList.remove('no-scroll');
    showToast('🎉 Thank you for shopping with LUXE!');
  });

  $('#checkout-overlay').addEventListener('click', (e) => {
    if (e.target === $('#checkout-overlay')) {
      $('#checkout-overlay').classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }
  });
}

/* -------------------------------------------------------
   NEWSLETTER POPUP
------------------------------------------------------- */
function initNewsletterPopup() {
  const shown = localStorage.getItem('luxe_newsletter_shown');
  if (shown) return;

  setTimeout(() => {
    $('#popup-overlay').classList.remove('hidden');
    document.body.classList.add('no-scroll');
  }, 4000);

  function closePopup() {
    $('#popup-overlay').classList.add('hidden');
    document.body.classList.remove('no-scroll');
    localStorage.setItem('luxe_newsletter_shown', 'true');
  }

  $('#popup-close').addEventListener('click', closePopup);
  $('#popup-skip').addEventListener('click', closePopup);

  $('#popup-subscribe').addEventListener('click', () => {
    const email = $('#popup-email').value.trim();
    if (!email || !email.includes('@')) {
      showToast('⚠️ Please enter a valid email');
      return;
    }
    closePopup();
    showToast('🎉 You\'re subscribed! Check your inbox for 10% off.');
  });

  $('#popup-overlay').addEventListener('click', (e) => {
    if (e.target === $('#popup-overlay')) closePopup();
  });
}

/* -------------------------------------------------------
   NEWSLETTER FOOTER
------------------------------------------------------- */
function initNewsletterFooter() {
  $('#newsletter-submit').addEventListener('click', () => {
    const email = $('#newsletter-email').value.trim();
    if (!email || !email.includes('@')) {
      showToast('⚠️ Please enter a valid email');
      return;
    }
    $('#newsletter-email').value = '';
    showToast('📧 Subscribed successfully!');
  });
}

/* -------------------------------------------------------
   CONTACT FORM
------------------------------------------------------- */
function initContactForm() {
  $('#contact-submit').addEventListener('click', () => {
    const name = $('#contact-name').value.trim();
    const email = $('#contact-email').value.trim();
    const msg = $('#contact-message').value.trim();

    if (!name || !email || !msg) {
      showToast('⚠️ Please fill in all fields');
      return;
    }
    if (!email.includes('@')) {
      showToast('⚠️ Please enter a valid email');
      return;
    }

    // Clear form
    $('#contact-name').value = '';
    $('#contact-email').value = '';
    $('#contact-message').value = '';
    showToast('✅ Message sent! We\'ll get back to you shortly.');
  });
}

/* -------------------------------------------------------
   TOAST NOTIFICATIONS
------------------------------------------------------- */
function showToast(message, duration = 3000) {
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-msg">${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}

/* -------------------------------------------------------
   ANIMATED COUNTERS
------------------------------------------------------- */
function animateCounters() {
  const counters = $$('[data-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

/* -------------------------------------------------------
   BACK TO TOP
------------------------------------------------------- */
function initBackToTop() {
  $('#back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------
   SCROLL REVEAL (Intersection Observer)
------------------------------------------------------- */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  $$('.feature, .contact-info, .contact-form, .about-text').forEach(el => {
    observer.observe(el);
  });
}

/* -------------------------------------------------------
   SMOOTH SCROLL FOR NAV LINKS
------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* -------------------------------------------------------
   KEYBOARD ACCESSIBILITY
------------------------------------------------------- */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeSidebar($('#cart-sidebar'), $('#cart-overlay'));
      closeSidebar($('#wishlist-sidebar'), $('#wishlist-overlay'));
    }
  });
}

/* -------------------------------------------------------
   WINDOW EVENTS
------------------------------------------------------- */
function initWindowEvents() {
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    handleNavScroll();
  }, { passive: true });
}

/* -------------------------------------------------------
   INIT — Entry Point
------------------------------------------------------- */
function init() {
  // Block scroll during loader
  document.body.style.overflow = 'hidden';

  // Load persisted state
  loadState();

  // Theme
  initTheme();

  // UI Bindings
  $('#theme-toggle').addEventListener('click', toggleTheme);

  // Loader
  initLoader();

  // Navbar
  initHamburger();
  initSearch();

  // Products
  initCategoryFilters();
  initPriceFilter();
  renderProducts(true); // Show skeletons first
  initLoadMore();

  // Cart
  updateCartUI();
  initCartSidebar();

  // Wishlist
  updateWishlistUI();
  initWishlistSidebar();

  // Modals & Popups
  initModal();
  initCheckoutPopup();
  initNewsletterPopup();
  initNewsletterFooter();
  initContactForm();

  // UX
  initBackToTop();
  initScrollReveal();
  initSmoothScroll();
  initKeyboard();
  initWindowEvents();

  // Initial scroll handler call
  handleNavScroll();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
