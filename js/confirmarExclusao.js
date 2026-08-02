document.addEventListener("DOMContentLoaded", function () {
    const btnExcluirConta = document.getElementById("btnExcluirConta");
    const popupExcluir = document.getElementById("popupExcluir");
    const cancelarExcluir = document.getElementById("cancelarExcluir");


    if (btnExcluirConta && popupExcluir && cancelarExcluir) {
        
     
        btnExcluirConta.addEventListener("click", function (event) {
            event.preventDefault(); 
            popupExcluir.style.display = "flex";
        });
        cancelarExcluir.addEventListener("click", function (event) {
            event.preventDefault();
            popupExcluir.style.display = "none";
        });
        window.addEventListener("click", function (event) {
            if (event.target === popupExcluir) {
                popupExcluir.style.display = "none";
            }
        });
    }
});