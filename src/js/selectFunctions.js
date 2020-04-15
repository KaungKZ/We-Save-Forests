export function selectOne(selector) {
  return document.querySelector(`${selector}`);
}

export function selectAll(selector) {
  return document.querySelectorAll(`${selector}`);
}
