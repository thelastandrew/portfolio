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
    body.classList.toggle("block");
    nav.classList.toggle("show");
  });
});
