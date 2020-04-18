import { loading_screen, steps, titles, contact_section } from "./selectors";

import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const tl = gsap.timeline();

const tl_shapes = gsap.timeline({
  defaults: { opacity: 1 },
});

const header_afters = CSSRulePlugin.getRule(
  "header .header-content .text .main-title span::after"
);
document.quer;

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

let shapes_animation_duration = 0.7;
const toVals = { duration: shapes_animation_duration };

function step_shapes_animation(step) {
  if (step.includes("step-1")) {
    return tl_shapes.fromTo(
      ".step-1 .shapes img",
      { scale: 0 },
      { scale: 1, ...toVals }
    );
  } else if (step.includes("step-2")) {
    return tl_shapes
      .fromTo(
        ".step-2 .shapes img:first-child",
        { x: -200 },
        { x: 0, ...toVals }
      )
      .fromTo(
        ".step-2 .shapes img:last-child",
        { y: -100, opacity: 0 },
        { y: 0, duration: shapes_animation_duration + 0.5 },
        "-=0.4"
      );
  } else {
    return tl_shapes.fromTo(
      ".step-3 .shapes img",
      { scale: 0 },
      { scale: 1, ...toVals }
    );
  }
}

const options = {
  rootMargin: "100px 0px 0px 0px",
};

const options_for_shapes = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.4,
};

const header_observer = new IntersectionObserver(span_after_ob_func, options);
const shapes_observer = new IntersectionObserver(
  shapes_ob_func,
  options_for_shapes
);

export function initFunc() {
  if (!window.sessionStorage.getItem("name")) {
    window.sessionStorage.setItem("name", "firstTime");
    tl.add(loading_animation());
    page_animation();
  } else {
    page_animation();
  }
}

function page_animation() {
  document.body.classList.add("loaded");
  tl.add(header_animation());
  steps.forEach((step) => header_observer.observe(step));
  steps.forEach((step) => shapes_observer.observe(step));
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

function shapes_ob_func(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (window.matchMedia("(max-width: 450px)").matches) return;
      const entryClass = entry.target.classList.value;
      step_shapes_animation(entryClass);
      observer.unobserve(entry.target);
    }
  });
}

function helperTitle(title, observer, target) {
  title.classList.add("animate");
  observer.unobserve(target);
}
