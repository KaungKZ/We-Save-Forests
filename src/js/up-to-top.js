import { upToTop_btn } from "./selectors";

export function upToTop() {
  const scrollPosition = this.scrollY;
  const documentHeight = document.body.scrollHeight;

  if (scrollPosition > documentHeight / 2 - 500) {
    upToTop_btn.classList.add("utt-active");
  } else {
    upToTop_btn.classList.remove("utt-active");
  }
}
