document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('[data-tab-button');
    const questions = document.querySelectorAll('[data-faq-question');

    const  heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaHero) {
            exibeElementos();
        } else {
            ocultaElementos();
        }
    })
    
    // Funçao para Mudar as Sessoes ao Clicar
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${tabAlvo}]`);
            esconderTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Função para mostrar a resposta ao clicar na pergunta
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

// Funçao para Mudar o Active dos Botoes
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function esconderTodasAbas() {
    const tabs = document.querySelectorAll('[data-tab-id');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('shows__list--is-active');
    }
}

function ocultaElementos() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementos() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}