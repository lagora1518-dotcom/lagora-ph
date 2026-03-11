// ─── LAGORA DATA — Limited to Pagsanjan & Sta. Cruz, Laguna ───

var PRODUCTS = [
  { id: 1, name: 'Fresh Organic Kamias from Pagsanjan Farms', price: 120, seller: 'Mang Berto Farm', location: 'Pagsanjan', category: 'food', emoji: '🌿', badge: 'Organic', verified: true },
  { id: 2, name: 'Traditional Laguna Suman Malagkit (12 pcs)', price: 180, seller: 'Aling Rosa Sweets', location: 'Sta. Cruz', category: 'food', emoji: '🍡', badge: 'Bestseller', verified: true },
  { id: 3, name: 'Acrylic Painting – Mt. Banahaw at Sunrise', price: 3500, seller: 'Nina Art Studio', location: 'Pagsanjan', category: 'crafts', emoji: '🖼️', badge: 'Original', verified: true },
  { id: 4, name: 'Home Repair & Plumbing Services', price: 350, seller: 'Kuya Boy Services', location: 'Sta. Cruz', category: 'services', emoji: '🔧', badge: 'Service', verified: true },
  { id: 5, name: 'Tailored Barong Tagalog (Custom Made)', price: 1800, seller: 'Aling Nena Atelier', location: 'Pagsanjan', category: 'fashion', emoji: '👔', badge: 'Custom', verified: true },
  { id: 6, name: 'Tutoring Services – Math & Science (Grade 7–10)', price: 150, seller: 'Teacher Jen', location: 'Sta. Cruz', category: 'services', emoji: '📚', badge: 'Service', verified: true },
  { id: 7, name: 'Handmade Woven Banig from Pagsanjan', price: 420, seller: 'Weave Ni Lola', location: 'Pagsanjan', category: 'crafts', emoji: '🧺', badge: 'Handmade', verified: true },
  { id: 8, name: 'Home-cooked Adobo Meal Delivery (Sta. Cruz)', price: 95, seller: 'Inay\'s Kitchen', location: 'Sta. Cruz', category: 'food', emoji: '🍲', badge: 'Fresh', verified: false },
  { id: 9, name: 'Pagsanjan Buko Pie (6-inch, homemade)', price: 230, seller: 'Aling Cora Bakery', location: 'Pagsanjan', category: 'food', emoji: '🥧', badge: 'Artisanal', verified: true },
  { id: 10, name: 'Graphic Design & Tarpaulin Printing Services', price: 300, seller: 'JM Graphics', location: 'Sta. Cruz', category: 'services', emoji: '🎨', badge: 'Service', verified: true },
  { id: 11, name: 'Hand-Painted Wooden Sign (Custom Name)', price: 380, seller: 'Artisano Pagsanjan', location: 'Pagsanjan', category: 'home', emoji: '🪵', badge: 'Custom', verified: true },
  { id: 12, name: 'Fresh Tilapia from Pagsanjan Fish Pond (1kg)', price: 200, seller: 'Pagsanjan Fish Farm', location: 'Pagsanjan', category: 'food', emoji: '🐟', badge: 'Fresh', verified: true },
  { id: 13, name: 'Tailoring & Clothing Repair Services', price: 120, seller: 'Mang Romy Atelier', location: 'Sta. Cruz', category: 'services', emoji: '✂️', badge: 'Service', verified: true },
  { id: 14, name: 'Homemade Kesong Puti (White Cheese, 200g)', price: 140, seller: 'Dairy Ni Tita', location: 'Sta. Cruz', category: 'food', emoji: '🧀', badge: 'Fresh', verified: false },
  { id: 15, name: 'Pagsanjan Bamboo Lantern (Decorative)', price: 280, seller: 'Pagsanjan Crafts', location: 'Pagsanjan', category: 'home', emoji: '🏮', badge: 'Handmade', verified: true },
  { id: 16, name: 'Home-made Tablea Pure Cacao Drink Mix (24 pcs)', price: 210, seller: 'Cacao Ni Nanay', location: 'Sta. Cruz', category: 'food', emoji: '🍫', badge: 'Artisanal', verified: true },
];

var SELLERS = [
  { id: 1, name: 'Aling Rosa Sweets', location: 'Sta. Cruz', avatar: 'R', avClass: 'av-orange', items: 24, reviews: 148, rating: 4.9, specialty: 'Kakanin & Sweets', category: 'food' },
  { id: 2, name: 'Nina Art Studio', location: 'Pagsanjan', avatar: 'N', avClass: 'av-purple', items: 12, reviews: 67, rating: 5.0, specialty: 'Paintings & Prints', category: 'crafts' },
  { id: 3, name: 'Mang Berto Farm', location: 'Pagsanjan', avatar: 'B', avClass: 'av-green', items: 22, reviews: 112, rating: 4.8, specialty: 'Fresh Farm Produce', category: 'food' },
  { id: 4, name: 'Teacher Jen', location: 'Sta. Cruz', avatar: 'J', avClass: 'av-blue', items: 5, reviews: 44, rating: 5.0, specialty: 'Tutoring Services', category: 'services' },
  { id: 5, name: 'Aling Nena Atelier', location: 'Pagsanjan', avatar: 'A', avClass: 'av-red', items: 18, reviews: 89, rating: 4.7, specialty: 'Tailoring & Barong', category: 'fashion' },
  { id: 6, name: 'JM Graphics', location: 'Sta. Cruz', avatar: 'J', avClass: 'av-purple', items: 15, reviews: 62, rating: 4.8, specialty: 'Design & Printing', category: 'services' },
  { id: 7, name: 'Pagsanjan Fish Farm', location: 'Pagsanjan', avatar: 'P', avClass: 'av-blue', items: 8, reviews: 54, rating: 4.6, specialty: 'Fresh Fish & Seafood', category: 'food' },
  { id: 8, name: 'Cacao Ni Nanay', location: 'Sta. Cruz', avatar: 'C', avClass: 'av-orange', items: 11, reviews: 77, rating: 4.9, specialty: 'Artisanal Food', category: 'food' },
];

// ─── RENDER FUNCTIONS ───

function renderProductCard(p) {
  var badgeHtml = p.badge ? '<span class="product-badge ' + (p.verified ? 'verified' : '') + (p.sale ? ' sale' : '') + '">' + p.badge + '</span>' : '';
  var priceHtml = p.originalPrice
    ? '<span class="product-price">₱' + p.price.toLocaleString() + ' <span class="original">₱' + p.originalPrice.toLocaleString() + '</span></span>'
    : '<span class="product-price">₱' + p.price.toLocaleString() + '</span>';
  var wishlist = (typeof getWishlist === 'function') ? getWishlist() : [];
  var inWishlist = wishlist.includes(p.id);
  var productUrl = 'product.html?id=' + p.id;
  var heartFilled = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
  var heartEmpty = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';

  return '<div class="product-card" onclick="window.location=\'' + productUrl + '\'">' +
    '<div class="product-img">' +
    '<div class="img-placeholder">' + p.emoji + '</div>' +
    badgeHtml +
    '<button class="wishlist-btn ' + (inWishlist ? 'active' : '') + '" onclick="event.stopPropagation(); toggleWishlist(' + p.id + ', \'' + p.name.replace(/'/g, "\\'") + '\', this)" aria-label="Save">' +
    (inWishlist ? heartFilled : heartEmpty) +
    '</button>' +
    '</div>' +
    '<div class="product-info">' +
    '<div class="product-seller">' + p.seller + ' ' + (p.verified ? '✓' : '') + '</div>' +
    '<div class="product-name">' + p.name + '</div>' +
    '<div class="product-meta">' + priceHtml + '<span class="product-location">📍 ' + p.location + '</span></div>' +
    '</div>' +
    '</div>';
}

function renderProductGrid(containerId, products) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = products.map(renderProductCard).join('');
}

function renderSellerCard(s) {
  return '<div class="seller-card" onclick="window.location=\'sellers.html?id=' + s.id + '\'">' +
    '<div class="seller-avatar ' + s.avClass + '">' + s.avatar + '</div>' +
    '<div class="verified-badge">✓ Verified Seller</div>' +
    '<div class="seller-name">' + s.name + '</div>' +
    '<div class="seller-loc">📍 ' + s.location + '</div>' +
    '<div class="seller-stats">' +
    '<div class="seller-stat"><strong>' + s.items + '</strong>Items</div>' +
    '<div class="seller-stat"><strong>' + s.rating + '★</strong>Rating</div>' +
    '<div class="seller-stat"><strong>' + s.reviews + '</strong>Reviews</div>' +
    '</div>' +
    '</div>';
}

function renderSellerGrid(containerId, sellers) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = sellers.map(renderSellerCard).join('');
}
