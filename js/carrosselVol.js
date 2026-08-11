document.addEventListener('DOMContentLoaded', () => {
  const btnEsquerda = document.getElementById('btn-esquerda');
  const btnDireita = document.getElementById('btn-direita');
  const listaMissoes = document.getElementById('lista-missoes');

  const distanciaRolagem = 260;

  btnDireita.addEventListener('click', () => {
    listaMissoes.scrollBy({
      left: distanciaRolagem,
      behavior: 'smooth',
    });
  });

  btnEsquerda.addEventListener('click', () => {
    listaMissoes.scrollBy({
      left: -distanciaRolagem,
      behavior: 'smooth',
    });
  });
});