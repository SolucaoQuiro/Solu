// Elementos de conversão adicionais para o site SoluçãoQuiro
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar link para o CSS de conversão
    const conversionCss = document.createElement('link');
    conversionCss.rel = 'stylesheet';
    conversionCss.href = 'css/conversion.css';
    document.head.appendChild(conversionCss);
    
    // Criar barra de oferta no topo
    // createOfferBar();

    
    // Criar popup de conversão
    createConversionPopup();
    
    // Adicionar contador de sessões disponíveis
    addSessionCounter();
    
    // Adicionar indicadores de disponibilidade
    addAvailabilityIndicators();
    
    // Adicionar selo de garantia
    addGuaranteeBadge();
    
    // Adicionar contador de visualizações
    addViewCounter();
    
    // Adicionar destaque para depoimentos
    addTestimonialHighlights();
    
    // Adicionar botão de agendamento fixo no mobile
    if (window.innerWidth <= 768) {
        addMobileCta();
    }
});

// Função para criar barra de oferta no topo
function createOfferBar() {
    const offerBar = document.createElement('div');
    offerBar.className = 'offer-bar';
    
    const currentDate = new Date();
    const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dayName = dayNames[currentDate.getDay()];
    
    offerBar.innerHTML = `
        <p>Promoção de ${dayName}: 20% de desconto na primeira sessão! <span class="offer-timer"><span class="timer-unit">23</span>:<span class="timer-unit">59</span>:<span class="timer-unit">59</span></span>
        <a href="https://wa.me/5511965952970?text=Olá!%20Gostaria%20de%20aproveitar%20a%20promoção%20de%20hoje%20para%20agendar%20uma%20consulta." class="btn-small">Aproveitar</a></p>
    `;
    
    // Inserir antes do header
    const header = document.querySelector('.header');
    document.body.insertBefore(offerBar, header);
    
    // Iniciar temporizador
    startOfferTimer();
}

// Função para iniciar temporizador da oferta
function startOfferTimer() {
    // Definir tempo para meia-noite
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    let timeLeft = Math.floor((midnight - now) / 1000);
    
    const timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft = 24 * 60 * 60; // Reiniciar para 24 horas
        }
        
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        const timerUnits = document.querySelectorAll('.timer-unit');
        if (timerUnits.length === 3) {
            timerUnits[0].textContent = hours.toString().padStart(2, '0');
            timerUnits[1].textContent = minutes.toString().padStart(2, '0');
            timerUnits[2].textContent = seconds.toString().padStart(2, '0');
        }
        
        timeLeft--;
    }, 1000);
}

// Função para criar popup de conversão
function createConversionPopup() {
    const popup = document.createElement('div');
    popup.className = 'conversion-popup';
    popup.innerHTML = `
        <div class="conversion-popup-header">
            <h4 class="conversion-popup-title">Agende sua consulta agora!</h4>
            <button class="conversion-popup-close">&times;</button>
        </div>
        <div class="conversion-popup-content">
            <p>Olá! Está sentindo dores na coluna? Não espere mais para cuidar da sua saúde.</p>
            <p>Agende sua consulta agora e sinta alívio já na primeira sessão!</p>
        </div>
        <a href="https://wa.me/5511965952970?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20quiropraxia." class="btn btn-whatsapp conversion-popup-action"><i class="fab fa-whatsapp"></i> Agendar pelo WhatsApp</a>
    `;
    
    document.body.appendChild(popup);
    
    // Fechar popup ao clicar no X
    const closeButton = popup.querySelector('.conversion-popup-close');
    closeButton.addEventListener('click', function() {
        popup.classList.remove('active');
    });
    
    // Mostrar popup após 5 segundos
    setTimeout(function() {
        popup.classList.add('active');
    }, 5000);
    
    // Mostrar popup quando o usuário tentar sair da página
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !sessionStorage.getItem('popupShown')) {
            popup.classList.add('active');
            sessionStorage.setItem('popupShown', 'true');
        }
    });
}

// Função para adicionar contador de sessões disponíveis
function addSessionCounter() {
    const servicesSection = document.querySelector('#services .services-container');
    if (servicesSection) {
        const counter = document.createElement('div');
        counter.className = 'session-counter';
        
        // Gerar número aleatório entre 1 e 5
        const availableSessions = Math.floor(Math.random() * 5) + 1;
        
        counter.innerHTML = `<i class="fas fa-calendar-check"></i> Apenas ${availableSessions} horários disponíveis para hoje!`;
        
        servicesSection.parentNode.insertBefore(counter, servicesSection);
    }
}

// Função para adicionar indicadores de disponibilidade
function addAvailabilityIndicators() {
    const contactSection = document.querySelector('#contact .contact-info');
    if (contactSection) {
        const availability = document.createElement('div');
        availability.className = 'availability-indicator';
        availability.innerHTML = `
            <span class="availability-dot"></span>
            Atendimento disponível agora
        `;
        
        contactSection.prepend(availability);
    }
}

// Função para adicionar selo de garantia
function addGuaranteeBadge() {
    const ctaSection = document.querySelector('.cta .container');
    if (ctaSection) {
        const guarantee = document.createElement('div');
        guarantee.className = 'guarantee-badge';
        guarantee.innerHTML = `
            <i class="fas fa-shield-alt"></i>
            <p><strong>Garantia de satisfação:</strong> Alivio já na primeira sessão.</p>
        `;
        
        ctaSection.appendChild(guarantee);
    }
}

// Função para adicionar contador de visualizações
function addViewCounter() {
    const servicesCards = document.querySelectorAll('.service-card');
    servicesCards.forEach(card => {
        const viewCount = Math.floor(Math.random() * 50) + 20;
        const counter = document.createElement('div');
        counter.className = 'view-counter';
        counter.innerHTML = `<i class="fas fa-eye"></i> ${viewCount} pessoas visualizaram hoje`;
        
        card.querySelector('.service-content').appendChild(counter);
    });
}

// Função para adicionar destaque para depoimentos
function addTestimonialHighlights() {
    const testimonialSection = document.querySelector('#testimonials .section-title');
    if (testimonialSection) {
        const highlight = document.createElement('div');
        highlight.className = 'testimonial-highlight';
        highlight.textContent = '"Depois de anos sofrendo com dores nas costas, finalmente encontrei alívio. Recomendo a todos!" - Maria S.';
        
        testimonialSection.parentNode.insertBefore(highlight, testimonialSection.nextSibling);
    }
}

// Função para adicionar botão de agendamento fixo no mobile
function addMobileCta() {
    const mobileCta = document.createElement('div');
    mobileCta.className = 'mobile-cta';
    mobileCta.innerHTML = `
        <a href="https://wa.me/5511965952970?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20quiropraxia." class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> Agendar Consulta</a>
    `;
    
    // Inserir após o header
    const header = document.querySelector('.header');
    document.body.insertBefore(mobileCta, header.nextSibling);
}
