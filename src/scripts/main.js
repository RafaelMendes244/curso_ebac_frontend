document.addEventListener('DOMContentLoaded', function () {
    // --- LÓGICA DAS ABAS ---
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const targetTabId = event.target.dataset.tabButton;
            const targetTab = document.querySelector(`[data-tab-id=${targetTabId}]`);

            hideAllTabs();
            removeActiveButtons();

            targetTab.classList.add('shows__list--is-active');
            event.target.classList.add('shows__tabs__button--is-active');
        });
    });

    // --- LÓGICA DO FAQ ---
    const questions = document.querySelectorAll('[data-faq-question]');
    questions.forEach(question => {
        question.addEventListener('click', openOrCloseAnswer);
    });

    // --- LÓGICA: ANIMAÇÃO DE SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    // --- LÓGICA: SMOOTH SCROLL PARA O MENU ---
    const menuLinks = document.querySelectorAll('.header__links__item a');
    const header = document.querySelector('.header');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop;

                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach(tab => tab.classList.remove('shows__list--is-active'));
}

function removeActiveButtons() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(button => button.classList.remove('shows__tabs__button--is-active'));
}

function openOrCloseAnswer(event) {
    const questionItem = event.target.parentElement;
    questionItem.classList.toggle('faq__questions__item--is-open');
}