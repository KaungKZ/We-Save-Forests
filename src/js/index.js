import "../css/style.scss";
// import "../images/logo.svg";

const nav_btn = document.querySelector(".menu-for-phone");
const header_menu = document.querySelector("header .menu");
const header = document.querySelector("header");
const mobile_list = document.querySelector("header .menu .list");

nav_btn.addEventListener("click", function () {
  this.classList.toggle("mfp-active");
  header_menu.classList.toggle("mfp-header_menu-active");
  header.classList.toggle("mfp-header-active");
  mobile_list.classList.toggle("mfp-list-active");
});
// import "./css/style.scss";

// console.log("worked");
