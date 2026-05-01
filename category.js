const categories = [
  { id: "pet", icon: "🐾", label: "ペット用品", copy: "猫・犬・小動物向けのベッド、ケージ、服、おもちゃを集めています。" },
  { id: "toys", icon: "🧸", label: "玩具・潮玩", copy: "中国デザイナートイ、ブラインドボックス、フィギュア、模型のカテゴリです。" },
  { id: "food", icon: "🥢", label: "食品・茶", copy: "茶葉、菓子、調味料など。発送可否を買付前に確認します。" },
  { id: "fashion", icon: "👗", label: "衣類・バッグ", copy: "新中式、通勤服、バッグ、靴、アクセサリーを日本語サイズで確認できます。" },
  { id: "beauty", icon: "🪞", label: "美容・コスメ", copy: "中国コスメ、メイク道具、スキンケア雑貨を扱います。" },
  { id: "home", icon: "🏠", label: "生活雑貨", copy: "収納、キッチン、掃除、インテリア小物など日用品のカテゴリです。" },
  { id: "digital", icon: "🎧", label: "ガジェット", copy: "深圳系のスマホ周辺機器、小型家電、撮影機材を集めています。" },
  { id: "stationery", icon: "✒", label: "文具・手帳", copy: "ノート、シール、ペン、手帳素材など軽量で同梱しやすい商品です。" },
  { id: "craft", icon: "🏮", label: "伝統工芸", copy: "茶器、陶器、刺繍、香道具など、割れ物補強にも対応します。" },
  { id: "outdoor", icon: "⛺", label: "アウトドア", copy: "キャンプ、自転車、車載用品など大型配送を含むカテゴリです。" },
  { id: "baby", icon: "🍼", label: "ベビー用品", copy: "服、玩具、安全用品など、検品を重視する商品群です。" },
  { id: "health", icon: "🧘", label: "ヘルスケア", copy: "運動、リラックス、姿勢サポート用品を扱います。" }
];

const listings = [
  {
    id: 101,
    category: "pet",
    title: "大型猫用ウッドキャットハウス 折りたたみ式",
    seller: "広州ペット生活館",
    sellerType: "verified",
    sellerLabel: "認証ショップ",
    location: "広東省 広州",
    price: 198,
    domesticShipping: "中国国内送料 12元（約¥264）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 102,
    category: "pet",
    title: "犬猫兼用 夏用ひんやりマット Mサイズ",
    seller: "小林的宠物屋",
    sellerType: "personal",
    sellerLabel: "個人セラー",
    location: "浙江省 杭州",
    price: 58,
    domesticShipping: "中国国内送料込み",
    condition: "未使用に近い",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 103,
    category: "pet",
    title: "透明ペットキャリー 通気窓付き",
    seller: "義烏ペット卸",
    sellerType: "factory",
    sellerLabel: "工場・卸",
    location: "浙江省 義烏",
    price: 138,
    domesticShipping: "中国国内送料 8元（約¥176）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 201,
    category: "toys",
    title: "中国デザイナートイ ブラインドボックス 1点",
    seller: "上海潮玩倉庫",
    sellerType: "verified",
    sellerLabel: "認証ショップ",
    location: "上海市",
    price: 78,
    domesticShipping: "中国国内送料 6元（約¥132）",
    condition: "新品未開封",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 202,
    category: "toys",
    title: "中古ミニフィギュア まとめ売り 6体",
    seller: "玩具整理中",
    sellerType: "personal",
    sellerLabel: "個人セラー",
    location: "北京市",
    price: 108,
    domesticShipping: "中国国内送料込み",
    condition: "中古",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 301,
    category: "food",
    title: "雲南プーアル茶 試飲セット 5種",
    seller: "昆明茶葉直送",
    sellerType: "verified",
    sellerLabel: "認証ショップ",
    location: "雲南省 昆明",
    price: 118,
    domesticShipping: "中国国内送料 8元（約¥176）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 401,
    category: "fashion",
    title: "新中式ブラウス 刺繍ボタン アイボリー",
    seller: "杭州ファッション工房",
    sellerType: "verified",
    sellerLabel: "認証ショップ",
    location: "浙江省 杭州",
    price: 188,
    domesticShipping: "中国国内送料 7元（約¥154）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 501,
    category: "digital",
    title: "折りたたみ撮影ライト USB-C 給電",
    seller: "深圳ガジェット館",
    sellerType: "verified",
    sellerLabel: "認証ショップ",
    location: "広東省 深圳",
    price: 158,
    domesticShipping: "中国国内送料 6元（約¥132）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 601,
    category: "stationery",
    title: "透明 PET シール 12枚セット",
    seller: "義烏セレクト",
    sellerType: "factory",
    sellerLabel: "工場・卸",
    location: "浙江省 義烏",
    price: 32,
    domesticShipping: "中国国内送料 4元（約¥88）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 701,
    category: "home",
    title: "竹製キッチン収納ラック 組立式",
    seller: "福建ホームマーケット",
    sellerType: "factory",
    sellerLabel: "工場・卸",
    location: "福建省 福州",
    price: 138,
    domesticShipping: "中国国内送料 10元（約¥220）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 801,
    category: "beauty",
    title: "国潮メイクブラシ 8本セット",
    seller: "広州ビューティー選品",
    sellerType: "verified",
    sellerLabel: "認証ショップ",
    location: "広東省 広州",
    price: 89,
    domesticShipping: "中国国内送料 5元（約¥110）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=760&q=80"
  },
  {
    id: 901,
    category: "craft",
    title: "景徳鎮ミニ茶器セット ギフト箱付き",
    seller: "江西工芸社",
    sellerType: "verified",
    sellerLabel: "認証ショップ",
    location: "江西省 景徳鎮",
    price: 218,
    domesticShipping: "中国国内送料 8元（約¥176）",
    condition: "新品",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=760&q=80"
  }
];

const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category") || "pet";
const state = {
  sellerType: "all",
  query: "",
  sort: "recommended"
};

const EXCHANGE_RATE_JPY = 22;
const rmbFormatter = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 });
const jpyFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0
});

function money(value) {
  return `${rmbFormatter.format(value)}元（約${jpyFormatter.format(value * EXCHANGE_RATE_JPY)}）`;
}

function currentCategory() {
  return categories.find((category) => category.id === selectedCategory) || categories[0];
}

function renderHeading() {
  const category = currentCategory();
  document.querySelector("[data-category-title]").textContent = `${category.icon} ${category.label}`;
  document.querySelector("[data-category-copy]").textContent = category.copy;
}

function renderCategoryNav() {
  document.querySelector("[data-market-categories]").innerHTML = categories
    .map(
      (category) => `
        <a class="market-category-link ${category.id === selectedCategory ? "is-active" : ""}" href="./category.html?category=${category.id}">
          <span>${category.icon}</span>
          <strong>${category.label}</strong>
        </a>
      `
    )
    .join("");
}

function visibleListings() {
  let output = listings.filter((item) => item.category === selectedCategory);
  if (!output.length) {
    output = listings.slice(0, 6);
  }

  const query = state.query.trim().toLowerCase();
  output = output.filter((item) => {
    const sellerMatches = state.sellerType === "all" || item.sellerType === state.sellerType;
    const text = `${item.title} ${item.seller} ${item.location} ${item.sellerLabel}`.toLowerCase();
    const queryMatches = !query || text.includes(query);
    return sellerMatches && queryMatches;
  });

  if (state.sort === "low") {
    output = [...output].sort((a, b) => a.price - b.price);
  }
  if (state.sort === "high") {
    output = [...output].sort((a, b) => b.price - a.price);
  }

  return output;
}

function renderListings() {
  const list = visibleListings();
  document.querySelector("[data-market-count]").textContent = `${list.length} 件の商品`;

  document.querySelector("[data-market-list]").innerHTML = list.length
    ? list
        .map(
          (item) => `
            <article class="market-item">
              <img src="${item.image}" alt="${item.title}" loading="lazy" />
              <div class="market-item-body">
                <div class="seller-row">
                  <span class="seller-badge ${item.sellerType}">${item.sellerLabel}</span>
                  <strong>${item.seller}</strong>
                  <small>${item.location}</small>
                </div>
                <h2>${item.title}</h2>
                <p>${item.condition} · ${item.domesticShipping}</p>
                <div class="market-price-row">
                  <strong>${money(item.price)}</strong>
                  <span>代行手数料別 / 国際送料は倉庫到着後に確定</span>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : `<p class="empty">条件に合う商品がありません。</p>`;
}

document.querySelector(".market-search").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = document.querySelector("[data-market-search]").value;
  renderListings();
});

document.querySelector("[data-market-search]").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderListings();
});

document.querySelector("[data-sort]").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderListings();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-seller-filter]");
  if (!button) return;

  state.sellerType = button.dataset.sellerFilter;
  document.querySelectorAll("[data-seller-filter]").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  renderListings();
});

renderHeading();
renderCategoryNav();
renderListings();
