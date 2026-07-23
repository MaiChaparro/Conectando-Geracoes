// VALIDAR OS CAMPOS
const botaoSalvar = document.getElementById("salvar");

botaoSalvar.onclick = (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cidadeEstado = document.getElementById("cidadeEstado").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  // Verifica se há campos vazios
  if (
    nome === "" ||
    email === "" ||
    telefone === "" ||
    cidadeEstado === "" ||
    senha === "" ||
    confirmarSenha === ""
  ) {
    alert("Preencha todos os campos.");
    return;
  }

  // Verifica se as senhas são iguais
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  // Se estiver tudo certo
  alert("Alterações salvas com sucesso!");
};

// FOTO DE PERFIL
const foto = document.getElementById("foto");
const imagem = document.querySelector(".fotoPerfil img");

foto.onchange = () => {
  const arquivo = foto.files[0];
  
  if(arquivo){
    imagem.src = URL.createObjectURL(arquivo);
  }
}

// EXCLUIR CONTA
const btnExcluir = document.getElementById("btnExcluirConta");
const popupExcluir = document.getElementById("popupExcluir");
const cancelarExcluir = document.getElementById("cancelarExcluir");
const confirmarExcluir = document.getElementById("confirmarExcluir");

btnExcluir.addEventListener("click", () => {
    popupExcluir.style.display = "flex";
});

cancelarExcluir.addEventListener("click", () => {
    popupExcluir.style.display = "none";
});

confirmarExcluir.addEventListener("click", () => {
    alert("Conta excluída com sucesso!");
    // Aqui futuramente você colocará a lógica de exclusão.
});

popupExcluir.addEventListener("click", (e) => {
    if (e.target === popupExcluir) {
        popupExcluir.style.display = "none";
    }
});

// FAZ A FOTO MUDAR
const inputFoto = document.getElementById("foto");
const preview = document.getElementById("preview");

inputFoto.addEventListener("change", () => {
    const arquivo = inputFoto.files[0];

    if (arquivo) {
        preview.src = URL.createObjectURL(arquivo);
    }
});