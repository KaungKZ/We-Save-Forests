import {
  header_menu,
  header,
  mobile_list,
  home_page_body,
  nav_btn,
} from "./selectors";
import { smoothLinks } from "./smoothLinks";

export function handleNavLink() {
  const linkText = this.innerHTML.toLowerCase();
  if (linkText === "home") return;

  if (linkText === "explore") {
    smoothLinks(".learn_more-btn", 1500);
    removeMobileActive();
  } else if (linkText === "contact") {
    smoothLinks(".contact", 1500);
    removeMobileActive();
  }
}

export function handleSlideLink() {
  const linkText = this.innerHTML;

  linkText === "1"
    ? smoothLinks(".step-1", 1500)
    : linkText === "2"
    ? smoothLinks(".step-2", 1500)
    : smoothLinks(".step-3", 1500);
}

export function handleMobileNavBar() {
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

function removeMobileActive() {
  nav_btn.classList.remove("mfp-active");
  header_menu.classList.remove("mfp-header_menu-active");
  header.classList.remove("mfp-header-active");
  mobile_list.classList.remove("mfp-list-active");
  home_page_body.style.position = "static";
}
