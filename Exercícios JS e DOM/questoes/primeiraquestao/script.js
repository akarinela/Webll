document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("meubnt");

    botao.addEventListener("click", function() {
        alert("Você clicou no botão!");
        document.body.style.backgroundColor = "red";
    });
});
