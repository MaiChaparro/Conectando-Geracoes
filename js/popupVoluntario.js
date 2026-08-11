document.addEventListener('DOMContentLoaded', () => {
  const botaoPerfil = document.getElementById('botao-perfil');
  const menuSuspenso = document.getElementById('perfil-suspenso');
  if (botaoPerfil && menuSuspenso) {
    botaoPerfil.addEventListener('click', (event) => {
      event.stopPropagation();
      menuSuspenso.classList.toggle('mostrar');
    });
    document.addEventListener('click', (event) => {
      if (
        !menuSuspenso.contains(event.target) &&
        !botaoPerfil.contains(event.target)
      ) {
        menuSuspenso.classList.remove('mostrar');
      }
    });
  }
});
