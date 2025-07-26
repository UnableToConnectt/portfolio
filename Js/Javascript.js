const siteImages = [
  "assets/Mirro-screen.png",
  "assets/Browk Shop-screen.png",
  "assets/Lawliet-screen2.png",
  "assets/The witcher screen.png"
];

const siteNames = [
  "Mi<span class='highlight'>rr</span>o",
  "Bro<span class='highlight'>w</span>k Shop",
  "La<span class='highlight'>w</span>liet",
  "The <span class='highlight'>W</span>itcher"
];

let siteIndex = 0;

const siteImgElement = document.getElementById("main-site-img");
const siteNextBtn = document.getElementById("next-btn");
const sitePrevBtn = document.getElementById("prev-btn");
const siteNameElement = document.querySelector(".site-name p");

function changeSiteImage(index) {
  siteImgElement.src = siteImages[index];
  siteNameElement.innerHTML = siteNames[index];
}

siteNextBtn.addEventListener("click", () => {
  siteIndex = (siteIndex + 1) % siteImages.length;
  changeSiteImage(siteIndex);
});

sitePrevBtn.addEventListener("click", () => {
  siteIndex = (siteIndex - 1 + siteImages.length) % siteImages.length;
  changeSiteImage(siteIndex);
});

  const productImages = [
    "assets/сыворотка.png",
    "assets/фен.png",
    "assets/блендер.png"
  ];

  let productIndex = 0;

  const productImgElement = document.getElementById("mobile-img");
  const productNextBtn = document.getElementById("product-next-btn");
  const productPrevBtn = document.getElementById("product-prev-btn");

  function changeProductImage(index) {
    productImgElement.classList.add("fade-out");

    setTimeout(() => {
      productImgElement.src = productImages[index];
      productImgElement.classList.remove("fade-out");
    }, 300);
  }

  productNextBtn.addEventListener("click", () => {
    productIndex = (productIndex + 1) % productImages.length;
    changeProductImage(productIndex);
  });

  productPrevBtn.addEventListener("click", () => {
    productIndex = (productIndex - 1 + productImages.length) % productImages.length;
    changeProductImage(productIndex);
  });
