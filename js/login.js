document.addEventListener('DOMContentLoaded', () => {
    
    const formLogin = document.getElementById('form-login');

    if (formLogin) {
        formLogin.addEventListener('submit', (event) => {
            
            event.preventDefault();

            const perfilSelecionado = document.querySelector('input[name="perfil"]:checked');

            if (perfilSelecionado) {
                const tipoPessoa = perfilSelecionado.value; 

                
                if (tipoPessoa === "voluntario") {
                    window.location.href = "./telaMissoesVoluntario.html"; 
                } else if (tipoPessoa === "beneficiario") {
                    window.location.href = "./telaInicialIdoso.html"; 
                }
            } else {
                
                alert("Por favor, selecione se você é Voluntário ou Beneficiário para entrar.");
            }
        });
    }
});