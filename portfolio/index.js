const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");

burgerMenu.addEventListener("click", function (e) {
  burgerMenu.classList.toggle("active");
  nav.classList.toggle("show");
});
