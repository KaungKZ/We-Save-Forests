import { loading_screen, home_page_body } from "./selectors";

export function initFunc() {
  if (!window.sessionStorage.getItem("name")) {
    window.sessionStorage.setItem("name", "firstTime");
    setTimeout(() => {
      loading_screen.classList.add("loading_done");
      home_page_body.classList.add("loaded");
    }, 2600);
  } else {
    loading_screen.classList.add("loading_done");
    home_page_body.classList.add("loaded");
  }
}
