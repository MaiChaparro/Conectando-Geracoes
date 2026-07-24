const mensagemTranscrita = document.getElementById("mensagemTranscrita");

document.getElementById("btnEnviar").addEventListener("click", () => {
    if (mensagemTranscrita.value.trim() === "") {
        alert("Digite uma mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    mensagemTranscrita.value = "";
});

if (!("webkitSpeechRecognition" in window)) {
    alert("Seu navegador não suporta reconhecimento de voz.");
} else {
  const reconhecimento = new webkitSpeechRecognition();

reconhecimento.lang = "pt-BR";

document.getElementById("btnMicrofone").onclick = () => {
    reconhecimento.start();
};

reconhecimento.onresult = (evento) => {
    const fala = evento.results[0][0].transcript;

    document.getElementById("mensagemTranscrita").value += fala;
};
}