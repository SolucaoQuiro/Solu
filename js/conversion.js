// Elementos de conversão adicionais para o site SoluçãoQuiro
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar link para o CSS de conversão
    const conversionCss = document.createElement('link');
    conversionCss.rel = 'stylesheet';
    conversionCss.href = 'css/conversion.css';
    document.head.appendChild(conversionCss);
    
    // createOfferBar(); // REMOVIDO: barra de oferta no topo

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
    
    // if (window.innerWidth <= 768) {
    //     addMobileCta(); // REMOVIDO: botão de WhatsApp fixo no mobile
    // }
});

// REMOVIDAS as funções createOfferBar, startOfferTimer e addMobileCta

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
            <p><strong>Garantia de satisfação:</strong> Se não sentir melhora após a primeira sessão, a próxima é por nossa conta.</p>
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
