const menu = document.querySelector('.div-nav');
const botao = document.getElementById('menuHamburguer');

if (menu && botao) {
  botao.addEventListener('click', () => {
    menu.classList.toggle('ativo');

    botao.innerHTML = menu.classList.contains('ativo') ? '✕' : '☰';
  });

  document.querySelectorAll('.navbar-lateral a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('ativo');
      botao.innerHTML = '☰';
    });
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !botao.contains(e.target)) {
      menu.classList.remove('ativo');
      botao.innerHTML = '☰';
    }
  });
}

window.addEventListener('scroll', () => {
  menu.classList.remove('ativo');
  botao.innerHTML = '☰';
});