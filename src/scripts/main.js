document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteio').addEventListener('submit', function (evento) {
        // Prevenir o comportamento padrao do formulario
        evento.preventDefault();

        // Pegar o valor do input
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        // Gerar um numero aleatorio
        let numeroAleatorio = Math.random() * numeroMaximo;

        // Arredondar o numero para baixo
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        
        // Resultado
        document.getElementById('resultado-sorteio').innerText = numeroAleatorio;
        // Aparecer Div so Depois do Resultado
        document.querySelector('.resultado').style.display = 'block';
    })
})