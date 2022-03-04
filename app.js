import images from "./data.js";

const heroContainer = document.querySelector(".hero-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// set slides

heroContainer.innerHTML = images
  .map((image, slideIndex) => {
    const { img, name } = image;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === images.length - 1) {
      position = "last";
    }
    return ` <div class="slide ${position}">
      <img src="${img}" class="slide-img" alt="${name}" />
    </div>`;
  })
  .join("");

const startSlider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = heroContainer.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = heroContainer.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }

  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});

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

const value = document.getElementById("value");
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
