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

//LANGUAGE SELECTION
const lang = document.querySelectorAll(".lang");
let selectedLang = document.querySelector(".selected");
const textForTranslate = document.querySelectorAll("[data-i18]");
let currentLang = "en";

function getTranslate(lg) {
  textForTranslate.forEach((element) => {
    element.textContent = i18Obj[lg][element.dataset.i18];
    if (element.placeholder) {
      element.placeholder = i18Obj[lg][element.dataset.i18];
      element.textContent = "";
    }
    currentLang = lg;
  });
}

lang.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (!element.classList.contains("selected")) {
      selectedLang.classList.remove("selected");
      element.classList.add("selected");
      selectedLang = element;
      getTranslate(e.target.id);
    }
  });
});

//THEME SWITCHER
const switchTheme = document.querySelector(".switch-theme");

switchTheme.addEventListener('click', function(e) {
  body.classList.toggle('light');
})

//LOCAL STORAGE
let boolTheme = body.classList.contains('light'); //boolean
let theme = String(boolTheme); //string

function setLocalStorage() {
  localStorage.setItem("lang", currentLang);
  localStorage.setItem("theme", theme);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const language = localStorage.getItem('lang');
    getTranslate(language);
    
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);