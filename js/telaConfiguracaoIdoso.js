// VALORES ORIGINAIS
const valoresOriginais = {
  nome: document.getElementById('nome').value.trim(),
  email: document.getElementById('email').value.trim(),
  telefone: document.getElementById('telefone').value.trim(),
  cidadeEstado: document.getElementById('cidadeEstado').value.trim(),
  senha: document.getElementById('senha').value.trim(),
};

// FOTO DE PERFIL
const inputFoto = document.getElementById('foto');
const preview = document.getElementById('preview');

inputFoto.addEventListener('change', () => {
  const arquivo = inputFoto.files[0];

  if (arquivo) {
    preview.src = URL.createObjectURL(arquivo);
  }
});

// VALIDAR OS CAMPOS
const botaoSalvar = document.getElementById('salvar');

botaoSalvar.onclick = (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const cidadeEstado = document.getElementById('cidadeEstado').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

  // Verifica se houve alguma alteração
  const houveAlteracao =
    nome !== valoresOriginais.nome ||
    email !== valoresOriginais.email ||
    telefone !== valoresOriginais.telefone ||
    cidadeEstado !== valoresOriginais.cidadeEstado ||
    senha !== valoresOriginais.senha ||
    inputFoto.files.length > 0;

  // Validação do tipo dos campos
  if (!houveAlteracao) {
    alert('Nenhuma alteração foi feita.');
    return;
  }

  /* Nome */
  if (!/^[A-Za-zÀ-ÿ\s'-]+$/.test(nome)) {
    alert('O nome deve conter apenas letras.');
    return;
  }

  /* E-mail */
  const campoEmail = document.getElementById('email');

  campoEmail.style.border = '';

  if (!campoEmail.checkValidity()) {
    campoEmail.style.border = '2px solid red';
    campoEmail.focus();
    alert('Digite um e-mail válido.');
    return;
  }

  /* Telefone */
  const campoTelefone = telefone.replace(/\D/g, '');

  if (campoTelefone.length < 10 || campoTelefone.length > 11) {
    alert('Digite um número válido.');
    return;
  }

  /* Cidade/ Estado */
  if (!/^[A-Za-zÀ-ÿ\s]+ - [A-Z]{2}$/.test(cidadeEstado)) {
    alert('Digite no formato: Cidade - UF');
    return;
  }

  /* Verifica se as senhas são iguais */
  if ((senha || confirmarSenha) && senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    return;
  }

  // Se estiver tudo certo
  alert('Alterações salvas com sucesso!');

  // Atualiza os valores originais
  valoresOriginais.nome = nome;
  valoresOriginais.email = email;
  valoresOriginais.telefone = telefone;
  valoresOriginais.cidadeEstado = cidadeEstado;
  valoresOriginais.senha = senha;

  // Limpa o input da foto
  inputFoto.value = '';
};

// EXCLUIR CONTA
const btnExcluir = document.getElementById('btnExcluirConta');
const popupExcluir = document.getElementById('popupExcluir');
const cancelarExcluir = document.getElementById('cancelarExcluir');
const confirmarExcluir = document.getElementById('confirmarExcluir');

btnExcluir.addEventListener('click', () => {
  popupExcluir.style.display = 'flex';
});

cancelarExcluir.addEventListener('click', () => {
  popupExcluir.style.display = 'none';
});

confirmarExcluir.addEventListener('click', () => {
  alert('Conta excluída com sucesso!');
});

popupExcluir.addEventListener('click', (e) => {
  if (e.target === popupExcluir) {
    popupExcluir.style.display = 'none';
  }
});
