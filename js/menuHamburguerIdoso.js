const menu = document.querySelector(".div-nav");
const botao = document.getElementById("menuHamburguer");

if (menu && botao) {

  botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    botao.innerHTML = menu.classList.contains("ativo")
      ? "✕"
      : "☰";
  });

// Fechar ao clicar em um link
  document.querySelectorAll(".navbar-lateral a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
      botao.innerHTML = "☰";
    });
  });

// Fechar ao clicar fora do menu
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !botao.contains(e.target)) {
      menu.classList.remove("ativo");
      botao.innerHTML = "☰";
    }
  });
}

// Fechar ao rolar a página
window.addEventListener("scroll",() => {
  menu.classList.remove("ativo");
  botao.innerHTML = "☰";
});