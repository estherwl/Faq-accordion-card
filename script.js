// ⌃ ⌄

const dt = document.querySelectorAll("dt");

function clicou(event) {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

dt.forEach((i) => {
  i.addEventListener("click", clicou);
});