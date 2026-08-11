const dados = {
  tecnologia: {
    titulo: 'Tecnologia',
    descricao: 'Celular, aplicativos, internet',
    imagem: '../assets/icons/iconTech.svg',
    cor: 'rgba(25,128,230,0.1)',
  },

  companhia: {
    titulo: 'Companhia',
    descricao: 'Conversar, fazer amizades',
    imagem: '../assets/icons/iconchatamarelo.svg',
    cor: 'rgba(252,192,42,0.1)',
  },

  saude: {
    titulo: 'Saúde',
    descricao: 'Consultas, exames, medicamentos',
    imagem: '../assets/icons/iconMed.svg',
    cor: 'rgba(227,2,44,0.1)',
  },

  compras: {
    titulo: 'Compras',
    descricao: 'Mercado, farmácia, lojas',
    imagem: '../assets/icons/iconCarrinho.svg',
    cor: 'rgba(99,38,120,0.1)',
  },

  transporte: {
    titulo: 'Transporte',
    descricao: 'Caronas, consultas, compras',
    imagem: '../assets/icons/iconTransporte.svg',
    cor: 'rgba(21,136,65,0.1)',
  },

  outros: {
    titulo: 'Outros',
    descricao: 'Ajuda com outras necessidades',
    imagem: '../assets/icons/IconBolinhas.svg',
    cor: 'rgba(0,0,0,0.1)',
  },
};

const parametros = new URLSearchParams(window.location.search);
const tipo = parametros.get('tipo');

if (tipo && dados[tipo]) {
  document.getElementById('tituloSolicitacao').textContent = dados[tipo].titulo;

  document.getElementById('descricaoSolicitacao').textContent =
    dados[tipo].descricao;

  document.getElementById('iconeSolicitacao').src = dados[tipo].imagem;

  document.getElementById('iconeSolicitacao').alt = dados[tipo].titulo;

  document.getElementById('cardSolicitacao').style.backgroundColor =
    dados[tipo].cor;
}

const btnTrocar = document.getElementById('btnTrocar');
const menuDropdown = document.getElementById('menuDropdown');

btnTrocar.addEventListener('click', () => {
  menuDropdown.classList.toggle('ativo');
});

const titulo = document.getElementById('tituloSolicitacao');
const descricao = document.getElementById('descricaoSolicitacao');
const icone = document.getElementById('iconeSolicitacao');

document.querySelectorAll('#menuDropdown div').forEach((opcao) => {
  opcao.addEventListener('click', () => {
    const tipo = opcao.dataset.tipo;

    titulo.textContent = dados[tipo].titulo;
    descricao.textContent = dados[tipo].descricao;
    icone.src = dados[tipo].imagem;
    icone.alt = dados[tipo].titulo;

    document.getElementById('cardSolicitacao').style.backgroundColor =
      dados[tipo].cor;

    menuDropdown.classList.remove('ativo');
  });
});

document.addEventListener('click', (e) => {
  if (!btnTrocar.contains(e.target) && !menuDropdown.contains(e.target)) {
    menuDropdown.classList.remove('ativo');
  }
});

const formulario = document.querySelector('.informacoes-container');

const popupCancelar = document.getElementById('popupCancelar');
const popupEnviar = document.getElementById('popupEnviar');
const btnCancelar = document.getElementById('cancelar');
const okEnviar = document.getElementById('okEnviar');
const continuar = document.getElementById('continuar');
const confirmarCancelar = document.getElementById('confirmarCancelar');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const descricao = document.getElementById('descricao').value.trim();
  const nome = document.getElementById('nome').value.trim();
  const idade = document.getElementById('idade').value.trim();
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const endereco = document.getElementById('endereço').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cep = document.getElementById('cep').value.trim();
  const numero = document.getElementById('numero').value.trim();

  if (descricao.length < 10) {
    alert('Descreva melhor o que você precisa.');
    return;
  }

  if (!/^[A-Za-zÀ-ÿ\s'-]+$/.test(nome)) {
    alert('Digite um nome válido.');
    return;
  }

  if (!idade || idade < 60 || idade > 120) {
    alert('Digite uma idade válida (60 a 120 anos).');
    return;
  }

  const hoje = new Date().toISOString().split('T')[0];

  if (data < hoje) {
    alert('Escolha uma data de hoje em diante.');
    return;
  }

  if (hora === '') {
    alert('Selecione um horário.');
    return;
  }

  if (endereco === '') {
    alert('Digite o endereço.');
    return;
  }

  if (bairro === '') {
    alert('Digite o bairro.');
    return;
  }

  const cepNumeros = cep.replace(/\D/g, '');

  if (cepNumeros.length !== 8) {
    alert('Digite um CEP válido.');
    return;
  }

  if (numero === '' || Number(numero) <= 0) {
    alert('Digite o número do endereço.');
    return;
  }

  popupEnviar.style.display = 'flex';
});

okEnviar.addEventListener('click', () => {
  popupEnviar.style.display = 'none';

  formulario.reset();

  window.location.href = '../pages/telaInicialIdoso.html';
});

btnCancelar.addEventListener('click', () => {
  popupCancelar.style.display = 'flex';
});

continuar.addEventListener('click', () => {
  popupCancelar.style.display = 'none';
});

confirmarCancelar.addEventListener('click', () => {
  window.location.href = '../pages/telaInicialIdoso.html';
});