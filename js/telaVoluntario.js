const botao = document.getElementById('botao-perfil');
const menu = document.getElementById('perfil-suspenso');

if (botao && menu) {
    botao.addEventListener('click', function(event) {
        menu.classList.toggle('mostrar');
        event.stopPropagation();
    });

    window.addEventListener('click', function() {
        if (menu.classList.contains('mostrar')) {
            menu.classList.remove('mostrar');
        }
    });
}


const listaMissoes = document.getElementById('lista-missoes');
const btnEsquerda = document.getElementById('btn-esquerda');
const btnDireita = document.getElementById('btn-direita');

if (listaMissoes && btnEsquerda && btnDireita) {
    btnEsquerda.addEventListener('click', () => {
        listaMissoes.scrollBy({ left: -280, behavior: 'smooth' });
    });

    btnDireita.addEventListener('click', () => {
        listaMissoes.scrollBy({ left: 280, behavior: 'smooth' });
    });
}