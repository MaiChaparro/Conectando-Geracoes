// Elementos da página
const popup = document.getElementById("popupMicrofone");
const botoes = document.querySelectorAll(".abrirMicrofone");
const iniciar = document.getElementById("btnIniciar");
const fechar = document.getElementById("btnFechar");
const status = document.getElementById("status");
const texto = document.getElementById("textoReconhecido");

// Abre o pop-up
botoes.forEach(botao => {
  botao.onclick = (e) => {
    e.preventDefault();
    popup.style.display = "flex";
  };
});

// Fecha o pop-up
fechar.onclick = () => {
  popup.style.display = "none";
};

// Reconhecimento de voz
const reconhecimento = new webkitSpeechRecognition();
reconhecimento.lang = "pt-BR";

// Iniciar reconhecimento
iniciar.onclick = () => {
  status.innerHTML = "Estou ouvindo...";
  reconhecimento.start();
};

// Quando terminar de ouvir
reconhecimento.onresult = (evento) => {
  const fala = evento.results[0][0].transcript.toLowerCase();

  texto.innerHTML = fala;

  // Redirecionamentos
  if (fala.includes("ajuda") || fala.includes("suporte") || fala.includes("email")) {
    window.location.href = "telaSuporteIdoso.html";
  }

  else if (fala.includes("configuração") || fala.includes("senha") || fala.includes("perfil")) {
    window.location.href = "telaConfiguracaoIdoso.html";
  }

  else if (fala.includes("solicitação") || fala.includes("pedido")) {
    window.location.href = "telaSolicitacaoIdoso.html";
  }

  else if (fala.includes("tecnologia") || fala.includes("celular")) {
    window.location.href = "telaCardsIdoso.html?tipo=tecnologia";
  }

  else if (fala.includes("companhia")) {
    window.location.href = "telaCardsIdoso.html?tipo=companhia";
  }

  else if (fala.includes("saúde") || fala.includes("saude")) {
    window.location.href = "telaCardsIdoso.html?tipo=saude";
  }

  else if (fala.includes("compras")) {
    window.location.href = "telaCardsIdoso.html?tipo=compras";
  }

  else if (fala.includes("transporte")) {
    window.location.href = "telaCardsIdoso.html?tipo=transporte";
  }

  else {
    status.innerHTML = "Não consegui entender 😕";
  }
};