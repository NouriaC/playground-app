// toggle sidebar + overlay

const closeBtn = document.querySelector(".close-btn");
const btnMenu = document.querySelector(".icon");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

btnMenu.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
  overlay.classList.add("open-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  overlay.classList.remove("open-sidebar");
});

// counter

let count = 0;

const value = document.getElementById("item-quantity");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    value.textContent = count;
  }
});

plus.addEventListener("click", () => {
  count++;
  value.textContent = count;
});

const mainDOM = document.querySelector("main");
const heroContainer = document.querySelector(".hero-container");
const productCentre = document.querySelector(".product-centre");
const priceContainer = document.querySelector(".price-container");
const cartContainer = document.querySelector(".cart-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const cartBody = document.querySelector(".cart-body");
const cartItemsDOM = document.querySelector(".cart-items");
const cartItemCountDOM = document.querySelector(".cart-item-count");
const cartTotalDOM = document.querySelector(".item-total");
const cartBtn = document.getElementById("cart-btn-main");
const navCartBtn = document.querySelector(".nav-cart-btn");

import products from "./products.js";

function renderProducts() {
  products.forEach((product) => {
    heroContainer.innerHTML = `<div class="slide">
            <img src="${product.imgSrc}" class="slide-img" alt="${product.name}" />
          </div>`;
    productCentre.innerHTML = `<h4>Sneaker Company</h4>
          <h1>${product.name}</h1>
          <p>
           ${product.description}
          </p>`;
    priceContainer.innerHTML = `<div class="price">
            <h1>$${product.price}</h1>
            <h4 class="discount">50%</h4>
          </div>
          <h4 class="discounted-price">$${product.price * 2}</h4>`;
    cartBtn.setAttribute("data-id", product.id);
  });
}

renderProducts();

let cart = [];

navCartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle("show-cart-container");
});

cartBtn.addEventListener("click", () => {
  products.forEach((product) => {
    if (product.id === 3) {
      addToCart(product.id);
    }
  });
  // console.log(e.target.dataset.id);
  // addToCart(e.target.dataset.id);
  cartContainer.classList.toggle("show-cart-container");
});

function addToCart(id) {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    // add item to the cart
    product = { ...product, amount: count };
    cart = [...cart, product];
    // add item to the DOM
    addToCartDOM(product);
    console.log(cart);
  } else {
    // update values
  }
  // add one to the item count
  displayCartItemCount();
}

function findProduct(id) {
  let product = products.find((product) => product.id === id);
  return product;
}

// if (cartItemCountDOM.textContent === "0") {
//   cartItemCountDOM.style.display = "none";
// } else {
//   displayCartItemCount();
// }

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
}

// function displayCartTotal() {
//   let total = cart.reduce((total, cartItem) => {
//     return (total += cartItem.price * cartItem.amount);
//   }, 0);
//   cartTotalDOM.textContent = `$${total}`;
// }

function addToCartDOM({ id, name, amount, price, imgSrc: image }) {
  if (amount === 0) {
    cartBody.innerHTML = `<div>Your cart is empty</div>`;
  } else {
    cartItemsDOM.innerHTML = `<img
            src="${image}"
            alt="${name}"
          />
          <div class="cart-text">
            <p class="cart-item-name">${name}</p>
            <div class="cart-item-price">
              <p class="item-price">$${price} x</p>
              <p class="item-quantity">${amount}</p>
              <span class="item-total">$${price * amount}</span>
            </div>
          </div>
          <button class="btn-trash" data-id="${id}">
            <i class="fa-solid fa-trash-can"></i>
          </button>`;
  }
}

// import images from "./data.js";

// set slides

// heroContainer.innerHTML = images
//   .map((image, slideIndex) => {
//     const { img, name } = image;
//     let position = "next";
//     if (slideIndex === 0) {
//       position = "active";
//     }
//     if (slideIndex === images.length - 1) {
//       position = "last";
//     }
//     return ` <div class="slide ${position}">
//       <img src="${img}" class="slide-img" alt="${name}" />
//     </div>`;
//   })
//   .join("");

// const startSlider = (type) => {
//   const active = document.querySelector(".active");
//   const last = document.querySelector(".last");
//   let next = active.nextElementSibling;
//   if (!next) {
//     next = heroContainer.firstElementChild;
//   }
//   active.classList.remove(["active"]);
//   last.classList.remove(["last"]);
//   next.classList.remove(["next"]);

//   if (type === "prev") {
//     active.classList.add("next");
//     last.classList.add("active");
//     next = last.previousElementSibling;
//     if (!next) {
//       next = heroContainer.lastElementChild;
//     }
//     next.classList.remove(["next"]);
//     next.classList.add("last");
//     return;
//   }

//   active.classList.add("last");
//   last.classList.add("next");
//   next.classList.add("active");
// };

// nextBtn.addEventListener("click", () => {
//   startSlider();
// });
// prevBtn.addEventListener("click", () => {
//   startSlider("prev");
// });
