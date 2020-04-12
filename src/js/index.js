import "../css/style.scss";
// import "../images/logo.svg";

const nav_btn = selectOne(".menu-for-phone");
const header_menu = selectOne("header .menu");
const header = selectOne("header");
const mobile_list = selectOne("header .menu .list");
const upToTop_btn = selectOne(".up-to-top");

function selectOne(selector) {
  return document.querySelector(`${selector}`);
}

function selectAll(selector) {
  return document.querySelectorAll(`${selector}`);
}

nav_btn.addEventListener("click", function () {
  this.classList.toggle("mfp-active");
  header_menu.classList.toggle("mfp-header_menu-active");
  header.classList.toggle("mfp-header-active");
  mobile_list.classList.toggle("mfp-list-active");
});

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

function handleUpToTop(target, duration) {
  const goal = document.querySelector(target);
  const targetPosition = goal.getBoundingClientRect().top;
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
upToTop_btn.addEventListener("click", () => handleUpToTop(".menu", 1500));
