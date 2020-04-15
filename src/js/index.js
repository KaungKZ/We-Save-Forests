import "../css/style.scss";

const nav_btn = selectOne(".menu-for-phone");
const header_menu = selectOne("header .menu");
const header = selectOne("header");
const mobile_list = selectOne("header .menu .list");
const upToTop_btn = selectOne(".up-to-top");
const home_page_body = selectOne(".home-page");

const nav_links = selectAll(".list a");
const slide_links = selectAll(".slide-link");

const learn_more_btn = selectOne(".learn_more-btn");

const loading_screen = selectOne(".loading-screen");

function selectOne(selector) {
  return document.querySelector(`${selector}`);
}

function selectAll(selector) {
  return document.querySelectorAll(`${selector}`);
}

nav_btn.addEventListener("click", handleMobileNavBar);

function handleMobileNavBar() {
  this.classList.toggle("mfp-active");
  header_menu.classList.toggle("mfp-header_menu-active");
  header.classList.toggle("mfp-header-active");
  mobile_list.classList.toggle("mfp-list-active");
  if (mobile_list.className.includes("mfp-list-active")) {
    home_page_body.style.position = "fixed";
  } else {
    home_page_body.style.position = "static";
  }
}

function upToTop() {
  const scrollPosition = this.scrollY;
  const documentHeight = document.body.scrollHeight;

  if (scrollPosition > documentHeight / 2 - 500) {
    upToTop_btn.classList.add("utt-active");
  } else {
    upToTop_btn.classList.remove("utt-active");
  }
  // console.log(this.scrollY);
  // console.log(window.innerHeight);
}

function removeMobileActive() {
  nav_btn.classList.remove("mfp-active");
  header_menu.classList.remove("mfp-header_menu-active");
  header.classList.remove("mfp-header-active");
  mobile_list.classList.remove("mfp-list-active");
  home_page_body.style.position = "static";
}

function handleNavLink() {
  const linkText = this.innerHTML.toLowerCase();
  if (linkText === "home") return;

  if (linkText === "explore") {
    smoothLinks(".learn_more-btn", 1500);
    removeMobileActive();
    //document.body.style.position = "static";
  } else if (linkText === "contact") {
    smoothLinks(".contact", 1500);
    removeMobileActive();
    //document.body.style.position = "static";
  }
}

function handleSlideLink() {
  const linkText = this.innerHTML;

  linkText === "1"
    ? smoothLinks(".step-1", 1500)
    : linkText === "2"
    ? smoothLinks(".step-2", 1500)
    : smoothLinks(".step-3", 1500);
}

function smoothLinks(target, duration) {
  const goal = document.querySelector(target);
  const targetPosition = goal.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function Scrollanimation(time) {
    if (startTime === null) {
      startTime = time;
    }
    const timeElapsed = time - startTime;
    const run = calculation(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(Scrollanimation);
    }
  }
  function calculation(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }
  requestAnimationFrame(Scrollanimation);
}

window.addEventListener("scroll", upToTop);
upToTop_btn.addEventListener("click", () => smoothLinks(".menu", 1500));
nav_links.forEach((link) => link.addEventListener("click", handleNavLink));
learn_more_btn.addEventListener("click", () => smoothLinks(".step-1", 1000));
slide_links.forEach((link) => link.addEventListener("click", handleSlideLink));
// let arr = 555.5;

// console.log(parseInt(arr.replace()));

// const test = [
//   { date: "date1", plan: { year5: [5, 5.1], year6: [6, 6.1] } },
//   { date: "date2", plan: { year5: [5, 5.2], year6: [6, 6.2] } },
// ];

// const yearValues = test.map((one) => Object.values(one.plan));

// console.log(...yearValues);

// window.addEventListener("load", () => {
//   loading_screen.classList.add("active");
//   document.body.style.position = "fixed";

//   setTimeout(() => {
//     loading_screen.classList.remove("active");
//     document.body.style.position = "static";
//   }, 3200);
//   // svgElement.classList.add("play");
// });

// (function()
// {
//   if( window.localStorage)
//   {
//     if( !localStorage.getItem('firstLoad') )
//     {
//       localStorage['firstLoad'] = true;
//       window.location.reload();
//     }
//     else
//       localStorage.removeItem('firstLoad');
//   }
// })();
// const NAME = "once";
// const homeURL = "http://localhost:8080/";
// let currentURL;
window.onload = () => {
  // currentURL = document.URL;
  // console.log(currentURL);
  // console.log(document.URL);
  // if (currentURL == homeURL) {
  //   setTimeout(() => {
  //     loading_screen.classList.add("loading_done");
  //     document.body.classList.add("loaded");
  //   }, 3300);
  // } else {
  //   loading_screen.classList.add("loading_done");
  //   document.body.classList.add("loaded");
  // }
  if (!window.sessionStorage.getItem("name")) {
    window.sessionStorage.setItem("name", "firstTime");
    setTimeout(() => {
      loading_screen.classList.add("loading_done");
      home_page_body.classList.add("loaded");
    }, 3300);
  } else {
    loading_screen.classList.add("loading_done");
    home_page_body.classList.add("loaded");
  }
};

// let's say your `lastIndex` is 10. Because of `i <= 10 (lastIndex)` and when `i` reaches 10, you are setting `numberMatches.questions[i + 1]` which `numberMatches.questions[11]` doesn't exist.
