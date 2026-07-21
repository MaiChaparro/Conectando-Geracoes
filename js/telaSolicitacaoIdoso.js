document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.aba');
  const cards = document.querySelectorAll('.card');

  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      botoes.forEach((btn) => {
        btn.classList.remove('selecionado');
      });

      botao.classList.add('selecionado');

      const categoria = botao.dataset.selecionado;

      cards.forEach((card) => {
        if (categoria === 'todas' || card.classList.contains(categoria)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
