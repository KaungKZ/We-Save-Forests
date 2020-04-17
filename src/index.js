import "./css/style.scss";

import {
  nav_btn,
  upToTop_btn,
  nav_links,
  learn_more_btn,
  slide_links,
  navArrows,
} from "./js/selectors";

import { smoothLinks } from "./js/smoothLinks";
import { upToTop } from "./js/up-to-top";
import {
  handleNavLink,
  handleSlideLink,
  handleMobileNavBar,
  handleNavArrows,
} from "./js/navLinks";
import { initFunc } from "./js/gsapAnimations";

window.onload = initFunc;
window.addEventListener("scroll", upToTop);
nav_btn.addEventListener("click", handleMobileNavBar);
upToTop_btn.addEventListener("click", () => smoothLinks(".menu", 1500));
nav_links.forEach((link) => link.addEventListener("click", handleNavLink));
learn_more_btn.addEventListener("click", () => smoothLinks(".step-1", 1000));
slide_links.forEach((link) => link.addEventListener("click", handleSlideLink));
navArrows.forEach((arrow) => arrow.addEventListener("click", handleNavArrows));
