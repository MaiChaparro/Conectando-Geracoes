document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const menu = document.querySelector(".dropdown-menu");

  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("ativo");
  });

  document.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});