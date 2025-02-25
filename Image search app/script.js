"use strict";

/****PRELOAD***** loading will be end after the document is loaded */

const perloader = document.getElementById("preload");

window.addEventListener("load", function () {
  perloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/***
 * add events on multiple elements
 ***/

const addEventOnElements = (elements, eventType, callBack) => {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callBack);
  }
};

/***
 * Navbar
 ***/

const navBar = document.getElementById("navbar");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.getElementById("overlay");

const toggleNavBar = () => {
  navBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavBar);

/***
 * Header & Back To TOP Btn
 ***/
const header = document.getElementById("header");

const BackToTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = () => {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    BackToTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    BackToTopBtn.classList.remove("active");
  }
});

/**
 * Hero Slider
 **/

const heroSlider = document.getElementById("hero-slider");
const heroSliderItems = document.querySelectorAll("[data-slider-item]");
const heroSliderPrevBtn = document.getElementById("prev-btn");
const heroSliderNextBtn = document.getElementById("next-btn");

let currentSlidePos = 0;
let LastActiveSliderItem = heroSliderItems[0];
const UpdateSliderPos = () => {
  LastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  LastActiveSliderItem = heroSliderItems[currentSlidePos];
};

function sliderNext() {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  UpdateSliderPos();
}

heroSliderNextBtn.addEventListener("click", sliderNext);

function sliderPrev() {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  UpdateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", sliderPrev);

/**
 * Auto Silde
 **/

let autoSlideInterval;

function autoSlide() {
  autoSlideInterval = setInterval(function () {
    sliderNext();
  }, 7000);
}
addEventOnElements(
  [heroSliderPrevBtn, heroSliderNextBtn],
  "mouseover",
  function () {
    clearInterval(autoSlideInterval);
  }
);

addEventOnElements(
  [heroSliderPrevBtn, heroSliderNextBtn],
  "mouseout",
  autoSlide
);

window.addEventListener("load", autoSlide);

/***
 * PARALLAX EFFECT
 **/

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {
  x = (event.clientX / window.innerWidth) * 10 - 5;
  y = (event.clientY / window.innerHeight) * 10 - 5;

  // Reverse the number eg 20 → -20 , 5 → -5

  x = x - x * 2;
  y = y - y * 2;

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px ,${y}px , 0px)`;
  }
});
