import "../css/style.scss";
// import "../images/logo.svg";

const nav_btn = document.querySelector(".menu-for-phone");
const header_menu = document.querySelector("header .menu");

nav_btn.addEventListener("click", function () {
  this.classList.toggle("mfp-active");
  header_menu.classList.toggle("menu-active");
});
// import "./css/style.scss";

// console.log("worked");
