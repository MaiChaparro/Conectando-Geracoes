document.addEventListener('DOMContentLoaded', () => {
  const botoesAceitar = document.querySelectorAll('.botao-aceitar');

  botoesAceitar.forEach((botao) => {
    const idMissao = botao.getAttribute('data-id');
    if (idMissao && localStorage.getItem(`missao_${idMissao}`) === 'aceita') {
      botao.classList.add('aceita-amarelo');
      botao.textContent = 'Missão Aceita';
    }

    botao.addEventListener('click', function () {
      const estaAceito = this.classList.contains('aceita-amarelo');

      if (estaAceito) {
        this.classList.remove('aceita-amarelo');
        this.textContent = 'Aceitar missão';

        if (idMissao) {
          localStorage.setItem(`missao_${idMissao}`, 'disponivel');
        }
      } else {
        this.classList.add('aceita-amarelo');
        this.textContent = 'Missão Aceita';

        if (idMissao) {
          localStorage.setItem(`missao_${idMissao}`, 'aceita');
        }
      }
    });
  });

  const botaoPerfil = document.getElementById('botao-perfil');
  const perfilSuspenso = document.getElementById('perfil-suspenso');

  if (botaoPerfil && perfilSuspenso) {
    botaoPerfil.addEventListener('click', (e) => {
      e.stopPropagation();
      perfilSuspenso.classList.toggle('mostrar');
    });

    document.addEventListener('click', (e) => {
      if (
        !perfilSuspenso.contains(e.target) &&
        !botaoPerfil.contains(e.target)
      ) {
        perfilSuspenso.classList.remove('mostrar');
      }
    });
  }

  const listaMissoes = document.getElementById('lista-missoes');
  const btnEsquerda = document.getElementById('btn-esquerda');
  const btnDireita = document.getElementById('btn-direita');

  if (listaMissoes && btnEsquerda && btnDireita) {
    const distanciaScroll = 280;

    btnEsquerda.addEventListener('click', () => {
      listaMissoes.scrollBy({ left: -distanciaScroll, behavior: 'smooth' });
    });

    btnDireita.addEventListener('click', () => {
      listaMissoes.scrollBy({ left: distanciaScroll, behavior: 'smooth' });
    });
  }

  const btnSair = document.querySelector('.btnSair');
  const popupSair = document.getElementById('popupSair');
  const cancelarSair = document.getElementById('cancelarSair');
  const confirmarSair = document.getElementById('confirmarSair');

  if (btnSair && popupSair) {
    btnSair.addEventListener('click', (e) => {
      e.preventDefault();
      popupSair.style.display = 'flex';
    });

    if (cancelarSair) {
      cancelarSair.addEventListener('click', () => {
        popupSair.style.display = 'none';
      });
    }

    if (confirmarSair) {
      confirmarSair.addEventListener('click', () => {
        window.location.href = './login.html';
      });
    }
  }
});