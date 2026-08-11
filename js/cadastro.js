document.addEventListener('DOMContentLoaded', () => {
  const formCadastro = document.querySelector('.form-cadastro');
  const seletorPessoa = document.getElementById('pessoa');

  if (formCadastro) {
    formCadastro.addEventListener('submit', (event) => {
      event.preventDefault();

      const tipoPessoa = seletorPessoa.value;

      if (tipoPessoa === 'voluntario') {
        if (tipoPessoa === 'voluntario') {
          window.location.href = './telaVoluntario.html';
        }
      } else if (tipoPessoa === 'beneficiario') {
        window.location.href = './telaInicialIdoso.html';
      } else {
        alert('Por favor, selecione se você é Voluntário ou Beneficiário.');
      }
    });
  }
});