document.addEventListener('DOMContentLoaded', () => {
  const botaoPerfil = document.getElementById('botao-perfil');
  const menuSuspenso = document.getElementById('perfil-suspenso');

  // A verificação `if` garante que o código não quebrará se uma página não tiver o menu
  if (botaoPerfil && menuSuspenso) {
    
    // Abre/fecha o menu ao clicar no botão de perfil
    botaoPerfil.addEventListener('click', (event) => {
      event.stopPropagation();
      menuSuspenso.classList.toggle('mostrar');
    });

    // Fecha o menu se o usuário clicar fora dele
    document.addEventListener('click', (event) => {
      if (!menuSuspenso.contains(event.target) && !botaoPerfil.contains(event.target)) {
        menuSuspenso.classList.remove('mostrar');
      }
    });
  }
});