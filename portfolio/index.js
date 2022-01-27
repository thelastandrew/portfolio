import i18Obj from "./translate.js";

// BURGER MENU
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-item");
const body = document.querySelector(".body");

burgerMenu.addEventListener("click", function (e) {
  burgerMenu.classList.toggle("active");
  body.classList.toggle("block");
  nav.classList.toggle("show");
});

navItems.forEach((element) => {
  element.addEventListener("click", function (e) {
    burgerMenu.classList.toggle("active");
    body.classList.remove("block");
    nav.classList.toggle("show");
  });
});

// PORTFOLIO IMAGES
const portfolioBtn = document.querySelectorAll(".portfolio-btn");
let activeBtn = document.querySelector(".active-btn");
const portfolioImg = document.querySelectorAll(".portfolio-img");
const seasons = ["winter", "spring", "summer", "autumn"];

function preloadImages() {
  seasons.forEach((element) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/jpg/${element}/${i}.jpg`;
    }
  });
}

preloadImages();

portfolioBtn.forEach((btnElement) => {
  btnElement.addEventListener("click", function (e) {
    if (!btnElement.classList.contains("active-btn")) {
      activeBtn.classList.remove("active-btn");
      btnElement.classList.add("active-btn");
      activeBtn = btnElement;
      portfolioImg.forEach((imgElement, index) => {
        imgElement.src = `./assets/jpg/${btnElement.dataset.season}/${
          index + 1
        }.jpg`;
      });
    }
  });
});
