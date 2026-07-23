document.addEventListener('DOMContentLoaded', () => {
  const btnEsquerda = document.getElementById('btn-esquerda');
  const btnDireita = document.getElementById('btn-direita');
  const listaMissoes = document.getElementById('lista-missoes');

  if (btnEsquerda && btnDireita && listaMissoes) {
    
    const distanciaScroll = 280;

    btnEsquerda.addEventListener('click', () => {
      listaMissoes.scrollBy({
        left: -distanciaScroll,
        behavior: 'smooth'
      });
    });

    btnDireita.addEventListener('click', () => {
      listaMissoes.scrollBy({
        left: distanciaScroll,
        behavior: 'smooth'
      });
    });
  }
});