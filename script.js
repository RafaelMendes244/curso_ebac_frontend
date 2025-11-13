// --- LÓGICA DO COUNTDOWN TIMER ---

// Defina a data-alvo do lançamento (Ano, Mês (0-11), Dia, Hora, Minuto, Segundo)
// Vamos definir para 1 de Dezembro de 2025
const launchDate = new Date("2025-12-01T09:00:00").getTime();

// Atualiza o contador a cada 1 segundo
const countdownInterval = setInterval(() => {
    
    // Pega a data e hora de hoje
    const now = new Date().getTime();
    
    // Calcula a distância entre agora e a data-alvo
    const distance = launchDate - now;
    
    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Formata os números para terem sempre dois dígitos (ex: 09 em vez de 9)
    const formatTime = (time) => time < 10 ? `0${time}` : time;

    // Exibe o resultado nos elementos com os IDs correspondentes
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
    
    // Se o contador terminar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2 style='color: var(--color-primary);'>O EVENTO COMEÇOU!</h2>";
    }
}, 1000);