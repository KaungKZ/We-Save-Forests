import "../css/style.scss";

import {
  nav_btn,
  upToTop_btn,
  nav_links,
  learn_more_btn,
  slide_links,
} from "./selectors";

import { smoothLinks } from "./smoothLinks";
import { upToTop } from "./up-to-top";
import { handleNavLink, handleSlideLink, handleMobileNavBar } from "./navLinks";
import { initFunc } from "./gsapAnimations";

window.onload = initFunc;
window.addEventListener("scroll", upToTop);
nav_btn.addEventListener("click", handleMobileNavBar);
upToTop_btn.addEventListener("click", () => smoothLinks(".menu", 1500));
nav_links.forEach((link) => link.addEventListener("click", handleNavLink));
learn_more_btn.addEventListener("click", () => smoothLinks(".step-1", 1000));
slide_links.forEach((link) => link.addEventListener("click", handleSlideLink));
