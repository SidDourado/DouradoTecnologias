//PROJETO DOURADO TEC

// ================= EMAILJS INIT ==================
(function () {
    emailjs.init("xRNJWyODol9wVP9XN");
})();

document.addEventListener('DOMContentLoaded', function () {
    // Variáveis globais
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const backToTop = document.querySelector('.back-to-top');

    // ===== NAVEGAÇÃO E MENU MOBILE =====
    // Alternar menu mobile
    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar no X (área do pseudo-elemento)
    menu.addEventListener('click', function (e) {
        const rect = menu.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // Verifica se o clique foi na área do X (canto superior direito)
        if (clickX > rect.width - 60 && clickY < 50) {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        }
    });

    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function (e) {
        if (menu.classList.contains('active') &&
            !menu.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        }
    });

    // Mudar estilo do header ao rolar a página
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Mostrar/ocultar botão voltar ao topo
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // ===== BANNER ROTATIVO (HERO SECTION) =====
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;

    // Função para mostrar slide específico
    function showSlide(index) {
        // Remover classe active de todos os slides e dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Adicionar classe active ao slide e dot atual
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Atualizar índice do slide atual
        currentSlide = index;
    }

    // Função para avançar para o próximo slide
    function nextSlideFunc() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }

    // Função para voltar para o slide anterior
    function prevSlideFunc() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }

    // Iniciar rotação automática dos slides
    function startSlideInterval() {
        slideInterval = setInterval(nextSlideFunc, 9000);
    }

    // Parar rotação automática dos slides
    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    // Eventos para controles do slider
    nextSlide.addEventListener('click', function () {
        stopSlideInterval();
        nextSlideFunc();
        startSlideInterval();
    });

    prevSlide.addEventListener('click', function () {
        stopSlideInterval();
        prevSlideFunc();
        startSlideInterval();
    });

    // Eventos para os dots do slider
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            stopSlideInterval();
            showSlide(index);
            startSlideInterval();
        });
    });

    // Iniciar rotação automática dos slides
    startSlideInterval();

    // ===== PORTFÓLIO CARROSSEL =====
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const prevPortfolio = document.querySelector('.prev-portfolio');
    const nextPortfolio = document.querySelector('.next-portfolio');
    let currentPortfolio = 0;

    // Função para mostrar item específico do portfólio
    function showPortfolioItem(index) {
        // Remover classe active de todos os itens
        portfolioItems.forEach(item => {
            item.classList.remove('active');
            item.style.transform = 'translateX(100%)';
        });

        // Adicionar classe active ao item atual
        portfolioItems[index].classList.add('active');
        portfolioItems[index].style.transform = 'translateX(0)';

        // Atualizar índice do item atual
        currentPortfolio = index;
    }

    // Função para avançar para o próximo item do portfólio
    function nextPortfolioFunc() {
        let nextIndex = currentPortfolio + 1;
        if (nextIndex >= portfolioItems.length) {
            nextIndex = 0;
        }
        showPortfolioItem(nextIndex);
    }

    // Função para voltar para o item anterior do portfólio
    function prevPortfolioFunc() {
        let prevIndex = currentPortfolio - 1;
        if (prevIndex < 0) {
            prevIndex = portfolioItems.length - 1;
        }
        showPortfolioItem(prevIndex);
    }

    // Eventos para controles do portfólio
    nextPortfolio.addEventListener('click', nextPortfolioFunc);
    prevPortfolio.addEventListener('click', prevPortfolioFunc);

    // ===== DEPOIMENTOS CARROSSEL =====
    const depoimentoItems = document.querySelectorAll('.depoimento-item');
    const depoimentoDots = document.querySelectorAll('.depoimentos-dots .dot');
    const prevDepoimento = document.querySelector('.prev-depoimento');
    const nextDepoimento = document.querySelector('.next-depoimento');
    let currentDepoimento = 0;
    let depoimentoInterval;

    // Função para mostrar depoimento específico
    function showDepoimento(index) {
        // Remover classe active de todos os depoimentos e dots
        depoimentoItems.forEach(item => {
            item.classList.remove('active');
            item.style.transform = 'translateX(100%)';
        });
        depoimentoDots.forEach(dot => dot.classList.remove('active'));

        // Adicionar classe active ao depoimento e dot atual
        depoimentoItems[index].classList.add('active');
        depoimentoItems[index].style.transform = 'translateX(0)';
        depoimentoDots[index].classList.add('active');

        // Atualizar índice do depoimento atual
        currentDepoimento = index;
    }

    // Função para avançar para o próximo depoimento
    function nextDepoimentoFunc() {
        let nextIndex = currentDepoimento + 1;
        if (nextIndex >= depoimentoItems.length) {
            nextIndex = 0;
        }
        showDepoimento(nextIndex);
    }

    // Função para voltar para o depoimento anterior
    function prevDepoimentoFunc() {
        let prevIndex = currentDepoimento - 1;
        if (prevIndex < 0) {
            prevIndex = depoimentoItems.length - 1;
        }
        showDepoimento(prevIndex);
    }

    // Iniciar rotação automática dos depoimentos
    function startDepoimentoInterval() {
        depoimentoInterval = setInterval(nextDepoimentoFunc, 6000);
    }

    // Parar rotação automática dos depoimentos
    function stopDepoimentoInterval() {
        clearInterval(depoimentoInterval);
    }

    // Eventos para controles dos depoimentos
    nextDepoimento.addEventListener('click', function () {
        stopDepoimentoInterval();
        nextDepoimentoFunc();
        startDepoimentoInterval();
    });

    prevDepoimento.addEventListener('click', function () {
        stopDepoimentoInterval();
        prevDepoimentoFunc();
        startDepoimentoInterval();
    });

    // Eventos para os dots dos depoimentos
    depoimentoDots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            stopDepoimentoInterval();
            showDepoimento(index);
            startDepoimentoInterval();
        });
    });

    // Iniciar rotação automática dos depoimentos
    startDepoimentoInterval();

    // ===== MÁSCARA DE TELEFONE =====
    const telefoneInput = document.getElementById('telefone');

    if (telefoneInput) {
        // Bloqueia caracteres não numéricos
        telefoneInput.addEventListener('keypress', function (e) {
            // Permite apenas números (0-9)
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        });

        // Aplica a máscara de telefone
        telefoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número

            // Limita a 11 dígitos (DDD + 9 dígitos)
            if (value.length > 11) {
                value = value.slice(0, 11);
            }

            // Aplica a máscara
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = `(${value}`;
                } else if (value.length <= 7) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                }
            }

            e.target.value = value;
        });

        // Bloqueia colar texto que não seja número
        telefoneInput.addEventListener('paste', function (e) {
            e.preventDefault();
            const pastedText = (e.clipboardData || window.clipboardData).getData('text');
            const numbersOnly = pastedText.replace(/\D/g, '').slice(0, 11);

            // Dispara o evento input para aplicar a máscara
            this.value = numbersOnly;
            this.dispatchEvent(new Event('input'));
        });
    }

    // ===== FORMULÁRIO DE CONTATO =====
    const form = document.getElementById('orcamento-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validar formulário
            let isValid = true;
            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const telefone = document.getElementById('telefone');
            const tipoProjeto = document.getElementById('tipo-projeto');
            const mensagem = document.getElementById('mensagem');

            // Validação simples
            if (nome.value.trim() === '') {
                isValid = false;
                showError(nome, 'Por favor, informe seu nome');
            } else {
                removeError(nome);
            }

            if (email.value.trim() === '') {
                isValid = false;
                showError(email, 'Por favor, informe seu e-mail');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                showError(email, 'Por favor, informe um e-mail válido');
            } else {
                removeError(email);
            }

            if (telefone.value.trim() === '') {
                isValid = false;
                showError(telefone, 'Por favor, informe seu telefone');
            } else {
                removeError(telefone);
            }

            if (tipoProjeto.value === '') {
                isValid = false;
                showError(tipoProjeto, 'Por favor, selecione um tipo de projeto');
            } else {
                removeError(tipoProjeto);
            }

            if (mensagem.value.trim() === '') {
                isValid = false;
                showError(mensagem, 'Por favor, informe sua mensagem');
            } else {
                removeError(mensagem);
            }

            // Se o formulário for válido, enviar
            if (isValid) {
                const btnEnviar = document.querySelector('.btn-enviar');
                const originalText = btnEnviar.textContent;

                btnEnviar.textContent = 'Enviando...';
                btnEnviar.disabled = true;

                // ENVIAR PARA EMAILJS
                emailjs.sendForm("service_xdfug9j", "template_qfdxs79", form)
                    .then(() => {

                        form.reset();
                        btnEnviar.textContent = originalText;
                        btnEnviar.disabled = false;

                        // Mensagem de sucesso
                        const successMessage = document.createElement('div');
                        successMessage.className = 'success-message';
                        successMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                        successMessage.style.backgroundColor = '#28a745';
                        successMessage.style.color = 'white';
                        successMessage.style.padding = '1rem';
                        successMessage.style.borderRadius = '5px';
                        successMessage.style.marginTop = '1rem';

                        form.appendChild(successMessage);

                        setTimeout(() => successMessage.remove(), 5000);

                    })
                    .catch((error) => {

                        btnEnviar.textContent = originalText;
                        btnEnviar.disabled = false;

                        // Mensagem de erro
                        const errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message-global';
                        errorMessage.textContent = 'Erro ao enviar. Tente novamente!';
                        errorMessage.style.backgroundColor = '#dc3545';
                        errorMessage.style.color = 'white';
                        errorMessage.style.padding = '1rem';
                        errorMessage.style.borderRadius = '5px';
                        errorMessage.style.marginTop = '1rem';

                        form.appendChild(errorMessage);

                        setTimeout(() => errorMessage.remove(), 5000);

                    });

            }
        });
    }

    // Função para mostrar erro no formulário
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorDiv = formGroup.querySelector('.error-message');

        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#dc3545';
            errorDiv.style.fontSize = '0.875rem';
            errorDiv.style.marginTop = '0.25rem';
            formGroup.appendChild(errorDiv);
        }

        errorDiv.textContent = message;
        input.style.borderColor = '#dc3545';
    }

    // Função para remover erro no formulário
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorDiv = formGroup.querySelector('.error-message');

        if (errorDiv) {
            errorDiv.remove();
        }

        input.style.borderColor = '';
    }

    // Função para validar e-mail
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    // ===== ANIMAÇÕES AO SCROLL =====
    // Função para animar elementos ao scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('[data-aos]');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    }

    // Adicionar classe para animação
    document.querySelectorAll('[data-aos]').forEach(element => {
        element.classList.add('aos-init');
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        element.style.opacity = '0';

        const animation = element.getAttribute('data-aos');

        if (animation === 'fade-up') {
            element.style.transform = 'translateY(50px)';
        }
    });

    // Classe para elementos animados
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .aos-animate {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);

    // Executar animação no carregamento e no scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // ===== INICIALIZAÇÃO =====
    // Mostrar primeiro slide
    showSlide(0);

    // Mostrar primeiro item do portfólio
    showPortfolioItem(0);

    // Mostrar primeiro depoimento
    showDepoimento(0);

    // Verificar posição inicial do scroll para o header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // Verificar posição inicial do scroll para o botão voltar ao topo
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    }

    // Animação inicial
    animateOnScroll();
});


//EFEITO DIGITACAO
document.addEventListener("DOMContentLoaded", function () {
    const el = document.getElementById("typing");
    const el2 = document.getElementById("typing2");

    // Define as frases para desktop e mobile
    const desktopText = "Transformando ideias em soluções digitais";
    const mobileLine1 = "Transformando ideias em,";
    const mobileLine2 = "soluções digitais";

    // Escolhe a frase com base no tamanho da tela
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Mobile: duas linhas com animação sequencial
        el.textContent = mobileLine1;
        el2.textContent = mobileLine2;

        const length1 = mobileLine1.length;
        const length2 = mobileLine2.length;
        const duration1 = length1 / 8;
        const duration2 = length2 / 8;

        // Primeira linha
        el.style.setProperty("--text-length", `${length1}ch`);
        el.style.width = "0ch";
        el.style.animation = `typing ${duration1}s steps(${length1}) forwards, blink 0.7s step-end infinite`;

        // Segunda linha (começa após a primeira terminar)
        el2.style.setProperty("--text-length", `${length2}ch`);
        el2.style.width = "0ch";
        el2.style.animation = `typing ${duration2}s steps(${length2}) ${duration1}s forwards, blink 0.7s step-end infinite`;
        el2.style.display = "block";
    } else {
        // Desktop: uma linha normal
        el.textContent = desktopText;
        const length = desktopText.length;
        el.style.setProperty("--text-length", `${length}ch`);
        el.style.width = "0ch";
        el.style.animation = `typing ${length / 8}s steps(${length}) forwards, blink 0.7s step-end infinite`;

        // Esconde a segunda linha no desktop
        if (el2) el2.style.display = "none";
    }
});


// ===== DEV BOY ANIMATION - PARTÍCULAS =====
(function () {
    const container = document.getElementById('devBoyAnimation');
    if (!container) return;

    // Símbolos de código
    const symbols = ['0', '1', '<>', '/>', '{', '}', '*', '()', '[]', ';;', '##'];
    // Paleta de cores neon
    const neonColors = ['#ff2d92', '#00f7ff', '#a855f7', '#facc15', '#3b82f6'];

    function createParticle() {
        const particle = document.createElement('span');
        particle.classList.add('code-particle');
        particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];

        // Cor aleatória da paleta neon
        const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
        particle.style.color = randomColor;
        particle.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;

        // Nascem perto das mãos/teclado
        const randomX = 30 + Math.random() * 40;
        const randomY = 70 + Math.random() * 15;

        particle.style.left = randomX + '%';
        particle.style.top = randomY + '%';

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2500);
    }

    // Partículas rápidas para combinar com a digitação
    setInterval(createParticle, 150);
})();




