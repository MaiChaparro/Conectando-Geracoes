const menu = document.getElementById('navbar');
const botao = document.getElementById('menuHamburguer');

botao.addEventListener('click', (evento) => {
  evento.stopPropagation();
  menu.classList.toggle('ativo');

  if (menu.classList.contains('ativo')) {
    botao.innerHTML = '✕';
  } else {
    botao.innerHTML = '☰';
  }
});

const links = document.querySelectorAll('.navbar a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo');
    botao.innerHTML = '☰';
  });
});

document.addEventListener('click', (evento) => {
  const clicouNoMenu = menu.contains(evento.target);
  const clicouNoBotao = botao.contains(evento.target);

  if (!clicouNoMenu && !clicouNoBotao) {
    menu.classList.remove('ativo');
    botao.innerHTML = '☰';
  }
});

window.addEventListener('scroll', () => {
  menu.classList.remove('ativo');
  botao.innerHTML = '☰';
});