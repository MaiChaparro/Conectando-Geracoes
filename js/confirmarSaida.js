const btnSair = document.querySelector(".btnSair");
const popupSair = document.getElementById("popupSair");
const cancelar = document.getElementById("cancelarSair");
const confirmar = document.getElementById("confirmarSair");

btnSair.addEventListener("click", (e) => {
    e.preventDefault();
    popupSair.style.display = "flex";
});

cancelar.addEventListener("click", () => {
    popupSair.style.display = "none";
});

confirmar.addEventListener("click", () => {
    window.location.href = "../index.html";
});

popupSair.addEventListener("click", (e) => {
    if (e.target === popupSair) {
        popupSair.style.display = "none";
    }
});