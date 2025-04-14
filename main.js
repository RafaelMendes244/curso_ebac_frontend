    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
      event.preventDefault();

      const campoA = parseFloat(document.getElementById('campoA').value);
      const campoB = parseFloat(document.getElementById('campoB').value);
      const mensagem = document.getElementById('mensagem');

      if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.className = "mensagem positiva";
      } else {
        mensagem.textContent = "Formulário inválido. O número B deve ser maior que o número A.";
        mensagem.className = "mensagem negativa";
      }
    });