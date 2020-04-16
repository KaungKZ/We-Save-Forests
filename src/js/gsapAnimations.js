import { loading_screen, steps, titles, contact_section } from "./selectors";

import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const tl = gsap.timeline();

const header_afters = CSSRulePlugin.getRule(
  "header .header-content .text .main-title span::after"
);

function loading_animation() {
  const anim = tl
    .to("body", { duration: 0, position: "fixed" })
    .to(loading_screen, { duration: 0, display: "flex" }, "<")
    .to(loading_screen, { duration: 2.6, display: "none" }, "<")
    .to("body", { duration: 0, position: "static" });

  return anim;
}

function header_animation() {
  const anim = tl
    .from("header .menu", { duration: 0.3, opacity: 0 })
    .from(".home-bg-shape", { duration: 0.5, opacity: 0 }, "<")
    .to(header_afters, { duration: 1, cssRule: { scaleY: 0 } }, "<")
    .from(
      ".header-content .header-text-animate",
      { duration: 0.7, opacity: 0, y: -30, stagger: 0.1 },
      "<"
    )
    .from(
      ".header-content .header-banner",
      { duration: 0.7, opacity: 0, x: 50 },
      "<"
    );
  return anim;
}

const options = {
  rootMargin: "100px 0px 0px 0px",
};

const header_observer = new IntersectionObserver(span_after_ob_func, options);

export function initFunc() {
  if (!window.sessionStorage.getItem("name")) {
    window.sessionStorage.setItem("name", "firstTime");
    tl.add(loading_animation());
    page_animation(header_observer);
  } else {
    page_animation(header_observer);
  }
}

function page_animation(header_observer) {
  document.body.classList.add("loaded");
  tl.add(header_animation());
  steps.forEach((step) => header_observer.observe(step));
  header_observer.observe(contact_section);
}

function span_after_ob_func(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const entryClass = entry.target.classList.value;
      if (entryClass === "step-1") {
        helperTitle(titles[0], observer, entry.target);
      } else if (entryClass === "step-2") {
        helperTitle(titles[1], observer, entry.target);
      } else if (entryClass === "step-3") {
        helperTitle(titles[2], observer, entry.target);
      } else {
        helperTitle(titles[3], observer, entry.target);
      }
    }
  });
}

function helperTitle(title, observer, target) {
  title.classList.add("animate");
  observer.unobserve(target);
}
