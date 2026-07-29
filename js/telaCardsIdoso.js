// Cards da tela Inicial para a tela Cards
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

// Abrir opções -> Trocar solicitação
const btnTrocar = document.getElementById('btnTrocar');
const menuDropdown = document.getElementById('menuDropdown');

btnTrocar.addEventListener('click', () => {
  menuDropdown.classList.toggle('ativo');
});

// Escolher uma opção -> Trocar solicitação
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

// Fechar ao clicar fora -> Trocar solicitação
document.addEventListener('click', (e) => {
  if (!btnTrocar.contains(e.target) && !menuDropdown.contains(e.target)) {
    menuDropdown.classList.remove('ativo');
  }
});
