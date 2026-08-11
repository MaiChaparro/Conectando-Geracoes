const selectPessoa = document.getElementById('pessoa');
const modal = document.getElementById('modal-voluntario');
const btnValidar = document.getElementById('btn-validar-doc');
const msgValidacao = document.getElementById('msg-validacao');

selectPessoa.addEventListener('change', function () {
  if (this.value === 'voluntario') {
    modal.style.display = 'flex';
  }
});

function fecharModal() {
  modal.style.display = 'none';

  if (msgValidacao.innerText !== 'Documento validado com sucesso! ✅') {
    selectPessoa.value = '';
  }
}

function simularValidacao() {
  btnValidar.innerText = 'Analisando documento...';
  btnValidar.style.opacity = '0.7';
  btnValidar.disabled = true;

  setTimeout(() => {
    btnValidar.style.display = 'none';
    msgValidacao.style.display = 'block';
    msgValidacao.innerText = 'Documento validado com sucesso! ✅';
    msgValidacao.style.color = '#28a745';

    setTimeout(() => {
      window.location.href = './telaVoluntario.html';
    }, 1500);
  }, 2500);
}