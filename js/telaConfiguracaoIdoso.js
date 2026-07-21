// VALIDAR OS CAMPOS
const botaoSalvar = document.getElementById("salvar");

botaoSalvar.onclick = () => {
  
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone  = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;
  

if(nome === "" || email === ""){
  alert("Preencha todos os campos.");
}else{
  alert("Alterações salvas!");
  }
}

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
const excluir = document.getElementById("excluir");

excluir.onclick = () => {
  const resposta = confirm("Tem certeza que deseja excluir sua conta?");

  if(resposta){
    alert("Conta excluída.");
    window.location.href = "../index.html";
  }
}