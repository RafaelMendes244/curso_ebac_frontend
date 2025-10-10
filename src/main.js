document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('[data-tab-button');
    
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
})

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