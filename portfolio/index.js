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

portfolioBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (!element.classList.contains("active-btn")) {
      activeBtn.classList.remove("active-btn");
      element.classList.add("active-btn");
      activeBtn = element;
    }
  });
});
