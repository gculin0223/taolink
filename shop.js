const shops = {
  shenzhen: {
    name: "深圳ガジェット館",
    type: "認証ショップ",
    location: "広東省 深圳",
    score: "4.8",
    response: "平均返信 2時間",
    description: "スマホ周辺機器、撮影ライト、小型家電を扱う深圳のショップ。電池入り商品は発送可否を事前確認します。",
    cover: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1400&q=85"
  },
  yiwu: {
    name: "義烏セレクト",
    type: "工場・卸",
    location: "浙江省 義烏",
    score: "4.7",
    response: "平均返信 4時間",
    description: "文具、収納、イベント小物、生活雑貨に強い義烏マーケット系セラー。小ロットまとめ買い向きです。",
    cover: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=85"
  },
  hangzhou: {
    name: "杭州ファッション工房",
    type: "認証ショップ",
    location: "浙江省 杭州",
    score: "4.9",
    response: "平均返信 1時間",
    description: "新中式、レディース服、バッグ、アクセサリーを扱う杭州のファッション店。サイズ確認に対応します。",
    cover: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=85"
  }
};

const products = [
  {
    shop: "shenzhen",
    title: "折りたたみ撮影ライト USB-C 給電",
    price: 158,
    condition: "新品",
    shipping: "中国国内送料 6元（約¥132）",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=760&q=80"
  },
  {
    shop: "shenzhen",
    title: "スマホ用ミニジンバル 軽量タイプ",
    price: 268,
    condition: "新品",
    shipping: "中国国内送料 8元（約¥176）",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=760&q=80"
  },
  {
    shop: "yiwu",
    title: "透明 PET シール 12枚セット",
    price: 32,
    condition: "新品",
    shipping: "中国国内送料 4元（約¥88）",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=760&q=80"
  },
  {
    shop: "yiwu",
    title: "イベント用ミニギフト袋 50枚",
    price: 45,
    condition: "新品",
    shipping: "中国国内送料 5元（約¥110）",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=760&q=80"
  },
  {
    shop: "hangzhou",
    title: "新中式ブラウス 刺繍ボタン アイボリー",
    price: 188,
    condition: "新品",
    shipping: "中国国内送料 7元（約¥154）",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=760&q=80"
  },
  {
    shop: "hangzhou",
    title: "レザー調ショルダーバッグ 通勤サイズ",
    price: 218,
    condition: "新品",
    shipping: "中国国内送料 8元（約¥176）",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=760&q=80"
  }
];

const EXCHANGE_RATE_JPY = 22;
const rmbFormatter = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 });
const jpyFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0
});

const params = new URLSearchParams(window.location.search);
const shopId = params.get("shop") || "shenzhen";
const shop = shops[shopId] || shops.shenzhen;
let sort = "recommended";

function money(value) {
  return `${rmbFormatter.format(value)}元（約${jpyFormatter.format(value * EXCHANGE_RATE_JPY)}）`;
}

function shopProducts() {
  const output = products.filter((item) => item.shop === shopId);
  if (sort === "low") return [...output].sort((a, b) => a.price - b.price);
  if (sort === "high") return [...output].sort((a, b) => b.price - a.price);
  return output;
}

function renderShop() {
  document.querySelector("[data-shop-hero]").innerHTML = `
    <img src="${shop.cover}" alt="${shop.name}" />
    <div class="shop-hero-panel">
      <span class="seller-badge verified">${shop.type}</span>
      <h1>${shop.name}</h1>
      <p>${shop.description}</p>
      <div class="shop-stats">
        <span><strong>${shop.location}</strong>所在地</span>
        <span><strong>${shop.score}</strong>評価</span>
        <span><strong>${shop.response}</strong>対応</span>
      </div>
    </div>
  `;
}

function renderProducts() {
  const output = shopProducts();
  document.querySelector("[data-shop-count]").textContent = `${output.length} 件の商品`;
  document.querySelector("[data-shop-products]").innerHTML = output
    .map(
      (item) => `
        <article class="market-item">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="market-item-body">
            <div class="seller-row">
              <span class="seller-badge verified">${shop.type}</span>
              <strong>${shop.name}</strong>
              <small>${shop.location}</small>
            </div>
            <h2>${item.title}</h2>
            <p>${item.condition} · ${item.shipping}</p>
            <div class="market-price-row">
              <strong>${money(item.price)}</strong>
              <span>代行手数料別 / 国際送料は倉庫到着後に確定</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

document.querySelector("[data-shop-sort]").addEventListener("change", (event) => {
  sort = event.target.value;
  renderProducts();
});

renderShop();
renderProducts();
