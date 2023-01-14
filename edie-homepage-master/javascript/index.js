// show-nav, hide-menu-bar, show-close-menu
const menuBar = document.querySelector(".menu-bar");
const closeMenu = document.querySelector(".close-menu");
const navElement = document.querySelector("nav");
const joinForm = document.querySelector(".join-form");

window.addEventListener("click", function (e) {
  if (e.target.parentElement.classList.contains("menu-bar")) {
    menuBar.classList.add("hide-menu-bar");
    closeMenu.classList.add("show-close-menu");
    navElement.classList.add("show-nav");
  } else if (e.target.parentElement.classList.contains("close-menu")) {
    menuBar.classList.remove("hide-menu-bar");
    closeMenu.classList.remove("show-close-menu");
    navElement.classList.remove("show-nav");
  }
});

joinForm.addEventListener("submit", function(e) {
  e.preventDefault();
});