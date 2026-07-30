document.addEventListener('DOMContentLoaded', () => {
  
    const btnMenuSair = document.querySelector('.btnSair'); 
    const popupSair = document.getElementById('popupSair'); 
    const btnCancelar = document.getElementById('cancelarSair'); 
    const btnConfirmar = document.getElementById('confirmarSair'); 

    if (btnMenuSair) {
        btnMenuSair.addEventListener('click', (evento) => {
            evento.preventDefault(); 
            popupSair.style.display = 'flex';
        });
    }

  
    if (btnCancelar) {
        btnCancelar.addEventListener('click', () => {
            popupSair.style.display = 'none'; 
        });
    }

    
    window.addEventListener('click', (evento) => {
        if (evento.target === popupSair) {
            popupSair.style.display = 'none';
        }
    });

    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', () => {
            window.location.href = '../index.html'; 
        });
    }
});