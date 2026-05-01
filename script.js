const categories = [
  { id: "pet", icon: "🐾", label: "ペット用品", hint: "猫・犬・小動物" },
  { id: "toys", icon: "🧸", label: "玩具・潮玩", hint: "フィギュア・ブラインド箱" },
  { id: "food", icon: "🥢", label: "食品・茶", hint: "茶葉・菓子・調味料" },
  { id: "fashion", icon: "👗", label: "衣類・バッグ", hint: "漢服・通勤服・靴" },
  { id: "beauty", icon: "🪞", label: "美容・コスメ", hint: "スキンケア・メイク" },
  { id: "home", icon: "🏠", label: "生活雑貨", hint: "収納・キッチン・掃除" },
  { id: "digital", icon: "🎧", label: "ガジェット", hint: "小型家電・撮影機材" },
  { id: "stationery", icon: "✒", label: "文具・手帳", hint: "ノート・シール・ペン" },
  { id: "craft", icon: "🏮", label: "伝統工芸", hint: "茶器・陶器・刺繍" },
  { id: "outdoor", icon: "⛺", label: "アウトドア", hint: "キャンプ・自転車" },
  { id: "baby", icon: "🍼", label: "ベビー用品", hint: "服・玩具・安全用品" },
  { id: "health", icon: "🧘", label: "ヘルスケア", hint: "運動・リラックス" }
];

const products = [
  {
    id: 1,
    category: "pet",
    shipping: "large",
    title: "折りたたみ猫ハウス 木目タイプ",
    shop: "広州ペット生活館",
    note: "倉庫でサイズ確認後、大型便見積り",
    price: 198,
    weight: 2.2,
    cargoTags: ["normal", "oversized"],
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 2,
    category: "toys",
    shipping: "air",
    title: "中国デザイナートイ ブラインドボックス",
    shop: "上海潮玩倉庫",
    note: "未開封、同梱向き",
    price: 78,
    weight: 0.3,
    cargoTags: ["normal"],
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 3,
    category: "food",
    shipping: "standard",
    title: "雲南プーアル茶 試飲セット",
    shop: "昆明茶葉直送",
    note: "食品可否チェック対象",
    price: 118,
    weight: 0.6,
    cargoTags: ["food"],
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 4,
    category: "fashion",
    shipping: "air",
    title: "新中式ブラウス 刺繍ボタン",
    shop: "杭州ファッション工房",
    note: "サイズ表を日本語化",
    price: 188,
    weight: 0.5,
    cargoTags: ["normal"],
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 5,
    category: "digital",
    shipping: "air",
    title: "折りたたみ撮影ライト USB-C",
    shop: "深圳ガジェット館",
    note: "電池なし、航空便対応",
    price: 158,
    weight: 0.7,
    cargoTags: ["normal"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 6,
    category: "stationery",
    shipping: "air",
    title: "透明 PET シール 12枚セット",
    shop: "義烏セレクト",
    note: "軽量、同梱おすすめ",
    price: 32,
    weight: 0.2,
    cargoTags: ["normal"],
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 7,
    category: "home",
    shipping: "standard",
    title: "竹製キッチン収納ラック",
    shop: "福建ホームマーケット",
    note: "組立式、標準便向き",
    price: 138,
    weight: 1.8,
    cargoTags: ["normal", "oversized"],
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 8,
    category: "beauty",
    shipping: "standard",
    title: "国潮メイクブラシ 8本セット",
    shop: "広州ビューティー選品",
    note: "液体なし、検品対応",
    price: 89,
    weight: 0.4,
    cargoTags: ["powder"],
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 9,
    category: "craft",
    shipping: "standard",
    title: "景徳鎮ミニ茶器セット",
    shop: "江西工芸社",
    note: "割れ物補強梱包推奨",
    price: 218,
    weight: 0.9,
    cargoTags: ["normal", "fragile"],
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=760&q=80"
  }
];

const state = {
  category: "all",
  shipping: "all",
  query: "",
  shippingMethod: "standard_ems",
  cart: []
};

const shippingMethods = [
  {
    id: "shanghai_ems",
    name: "上海EMS・快速",
    eta: "3-5営業日",
    firstWeight: 0.5,
    firstFee: 85,
    stepWeight: 0.5,
    stepFee: 20,
    accepts: ["normal", "fragile"],
    warning: "普貨向け。液体、粉末、クリーム、電池入り、危険品、刃物は不可。"
  },
  {
    id: "standard_ems",
    name: "鄭州EMS・標準",
    eta: "4-7営業日",
    firstWeight: 0.5,
    firstFee: 80,
    stepWeight: 0.5,
    stepFee: 18,
    accepts: ["normal", "fragile"],
    warning: "普貨向け。電池、危険品、刃物、指甲油、自熱鍋、香水は不可。"
  },
  {
    id: "food_ems",
    name: "食品対応EMS",
    eta: "5-8営業日",
    firstWeight: 0.5,
    firstFee: 80,
    stepWeight: 0.5,
    stepFee: 18,
    accepts: ["normal", "food", "fragile"],
    warning: "茶葉・お菓子など食品向け。肉類、卵、植物、種子類は検査リスクあり。"
  },
  {
    id: "special_ems",
    name: "EMS特貨",
    eta: "4-7営業日",
    firstWeight: 0.5,
    firstFee: 85,
    stepWeight: 0.5,
    stepFee: 23,
    accepts: ["normal", "battery", "powder", "cream", "fragile"],
    warning: "一部の電池入り・粉末・クリーム系に対応。危険品、刃物、香水は不可。"
  },
  {
    id: "sea_mail",
    name: "郵政海運",
    eta: "20-30営業日",
    firstWeight: 1,
    firstFee: 110,
    stepWeight: 1,
    stepFee: 13,
    accepts: ["normal", "food", "liquid", "battery", "powder", "cream", "fragile", "oversized"],
    warning: "食品、液体、電池、大型品向け。不泡、実重量計算。時間は長め。"
  }
];

const EXCHANGE_RATE_JPY = 22;
const rmbFormatter = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 });
const jpyFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0
});

const categoryGrid = document.querySelector("[data-categories]");
const productGrid = document.querySelector("[data-products]");
const categorySelect = document.querySelector("[data-filter-category]");
const shippingSelect = document.querySelector("[data-filter-shipping]");
const searchInput = document.querySelector("[data-search]");
const resultCount = document.querySelector("[data-result-count]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const shippingOptions = document.querySelector("[data-shipping-options]");
const shippingNote = document.querySelector("[data-shipping-note]");
const scrim = document.querySelector("[data-scrim]");

function money(value) {
  return `${rmbFormatter.format(value)}元（約${jpyFormatter.format(value * EXCHANGE_RATE_JPY)}）`;
}

function calculateShipping(method, weight) {
  if (!weight) return 0;
  const remaining = Math.max(0, weight - method.firstWeight);
  return method.firstFee + Math.ceil(remaining / method.stepWeight) * method.stepFee;
}

function cartTags(cartProducts) {
  return [...new Set(cartProducts.flatMap((item) => item.product.cargoTags ?? ["normal"]))];
}

function methodAvailable(method, tags) {
  return tags.every((tag) => method.accepts.includes(tag));
}

function renderCategories() {
  categoryGrid.innerHTML = categories
    .map(
      (category) => `
        <a class="category-card ${state.category === category.id ? "is-active" : ""}" href="./category.html?category=${category.id}">
          <span aria-hidden="true">${category.icon}</span>
          <strong>${category.label}</strong>
          <small>${category.hint}</small>
        </a>
      `
    )
    .join("");

  categorySelect.innerHTML = `
    <option value="all">すべて</option>
    ${categories.map((category) => `<option value="${category.id}">${category.label}</option>`).join("")}
  `;
  categorySelect.value = state.category;
}

function getVisibleProducts() {
  const query = state.query.trim().toLowerCase();
  return products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesShipping = state.shipping === "all" || product.shipping === state.shipping;
    const haystack = `${product.title} ${product.shop} ${product.note}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesCategory && matchesShipping && matchesQuery;
  });
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  resultCount.textContent = `${visibleProducts.length} 件表示`;

  if (!visibleProducts.length) {
    productGrid.innerHTML = `<p class="empty">条件に合う商品がありません。検索語を変えてください。</p>`;
    return;
  }

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const category = categories.find((item) => item.id === product.category);
      return `
        <article class="product-card">
          <img src="${product.image}" alt="${product.title}" loading="lazy" />
          <div class="product-body">
            <div class="product-meta">
              <span>${category?.label ?? "その他"}</span>
              <span>${product.shop}</span>
            </div>
            <h3>${product.title}</h3>
            <p>${product.note}</p>
            <div class="product-price">
              <strong>${money(product.price)}</strong>
              <button type="button" data-add="${product.id}">追加</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCart() {
  const cartProducts = state.cart
    .map((item) => ({
      ...item,
      product: products.find((product) => product.id === item.id)
    }))
    .filter((item) => item.product);
  const itemCount = cartProducts.reduce((sum, item) => sum + item.quantity, 0);
  const totalWeight = cartProducts.reduce((sum, item) => sum + item.product.weight * item.quantity, 0);
  const tags = cartTags(cartProducts);
  const availableMethods = shippingMethods.filter((method) => methodAvailable(method, tags));
  if (cartProducts.length && !availableMethods.some((method) => method.id === state.shippingMethod)) {
    state.shippingMethod = availableMethods[0]?.id ?? "sea_mail";
  }
  const selectedMethod = shippingMethods.find((method) => method.id === state.shippingMethod) ?? shippingMethods[1];
  cartCount.textContent = itemCount;

  if (!cartProducts.length) {
    cartItems.innerHTML = `<p class="empty">気になる商品を追加すると、概算費用を確認できます。</p>`;
  } else {
    cartItems.innerHTML = cartProducts
      .map(
        ({ product, quantity }) => `
          <article class="cart-item">
            <img src="${product.image}" alt="${product.title}" />
            <div>
              <div class="cart-item-title">
                <h3>${product.title}</h3>
                <button type="button" data-cart-remove="${product.id}" aria-label="${product.title}を削除">削除</button>
              </div>
              <p>${product.shop}</p>
              <p>${money(product.price)} / 点</p>
              <div class="quantity-control" aria-label="${product.title}の数量">
                <button type="button" data-cart-dec="${product.id}" aria-label="数量を減らす">−</button>
                <strong>${quantity}</strong>
                <button type="button" data-cart-inc="${product.id}" aria-label="数量を増やす">＋</button>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  const subtotal = cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const fee = Math.round(subtotal * 0.08);
  const shipping = calculateShipping(selectedMethod, totalWeight);
  const total = subtotal + fee + shipping;

  shippingOptions.innerHTML = shippingMethods
    .map((method) => {
      const isAvailable = methodAvailable(method, tags);
      const estimate = calculateShipping(method, totalWeight);
      return `
        <label class="shipping-option ${!isAvailable ? "is-disabled" : ""}">
          <input type="radio" name="shipping-method" value="${method.id}" ${method.id === state.shippingMethod ? "checked" : ""} ${!isAvailable || !cartProducts.length ? "disabled" : ""} />
          <span>
            <strong>${method.name}</strong>
            <small>${method.eta} · ${cartProducts.length ? money(estimate) : "商品追加後に見積"}</small>
          </span>
        </label>
      `;
    })
    .join("");
  shippingNote.textContent = cartProducts.length
    ? `${selectedMethod.warning} 概算重量 ${totalWeight.toFixed(1)}kg。倉庫到着後に実重量で確定します。`
    : "商品を追加すると、内容に合う配送ルートを選べます。";

  document.querySelector("[data-subtotal]").textContent = money(subtotal);
  document.querySelector("[data-fee]").textContent = money(fee);
  document.querySelector("[data-shipping]").textContent = money(shipping);
  document.querySelector("[data-total]").textContent = money(total);
}

function setCategory(category) {
  state.category = category;
  renderCategories();
  renderProducts();
}

function toggleCart(force) {
  const next = typeof force === "boolean" ? force : !cartDrawer.classList.contains("is-open");
  cartDrawer.classList.toggle("is-open", next);
  scrim.classList.toggle("is-open", next);
  cartDrawer.setAttribute("aria-hidden", String(!next));
}

function addToCart(productId) {
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }
  renderCart();
  toggleCart(true);
}

function updateCartQuantity(productId, change) {
  const existing = state.cart.find((item) => item.id === productId);
  if (!existing) return;

  existing.quantity += change;
  if (existing.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.id !== productId);
  }
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  renderCart();
}

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    setCategory(categoryButton.dataset.category);
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(Number(addButton.dataset.add));
  }

  const increaseButton = event.target.closest("[data-cart-inc]");
  if (increaseButton) {
    updateCartQuantity(Number(increaseButton.dataset.cartInc), 1);
  }

  const decreaseButton = event.target.closest("[data-cart-dec]");
  if (decreaseButton) {
    updateCartQuantity(Number(decreaseButton.dataset.cartDec), -1);
  }

  const removeButton = event.target.closest("[data-cart-remove]");
  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.cartRemove));
  }

  if (event.target.closest("[data-cart-toggle]")) {
    toggleCart();
  }

  if (event.target.closest("[data-reset]")) {
    state.category = "all";
    state.shipping = "all";
    state.query = "";
    categorySelect.value = "all";
    shippingSelect.value = "all";
    searchInput.value = "";
    renderCategories();
    renderProducts();
  }
});

shippingOptions.addEventListener("change", (event) => {
  if (event.target.matches('input[name="shipping-method"]')) {
    state.shippingMethod = event.target.value;
    renderCart();
  }
});

document.querySelector(".search-panel").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value;
  renderProducts();
  document.querySelector(".products").scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderProducts();
});

categorySelect.addEventListener("change", () => {
  setCategory(categorySelect.value);
});

shippingSelect.addEventListener("change", () => {
  state.shipping = shippingSelect.value;
  renderProducts();
});

renderCategories();
renderProducts();
renderCart();
