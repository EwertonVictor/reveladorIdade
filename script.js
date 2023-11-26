document.addEventListener("DOMContentLoaded", function() {
    // Obtém o botão e adiciona um ouvinte de evento de clique
    var btnSubmit = document.getElementById("btn-submit");
    btnSubmit.addEventListener("click", function() {
        calcularIdade();
    });

    // Obtém o campo de entrada e adiciona um ouvinte de evento de tecla
    var inputAno = document.getElementById("ano");
    inputAno.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            calcularIdade();
        }
    });

    function calcularIdade() {
        var anoNascimento = inputAno.value;
        var idade = new Date().getFullYear() - anoNascimento;

        var resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = "Sua idade é: " + idade + " anos";
    }
});
