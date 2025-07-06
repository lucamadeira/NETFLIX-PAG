// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function () {
    const answer = item.querySelector('.faq-answer');
    if (answer) {
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    }
  });
});

// Validazione email
const containerInput = document.getElementById("containerInput");
const emailInput = document.getElementById("email");
const buttons = document.getElementsByClassName("button-log");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

containerInput.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  emailInput.value = "";
});

Array.from(buttons).forEach(function (button) {
  button.addEventListener('click', function () {
    if (emailInput.value === '') {
      alert('Per favore mettere il tuo email.');
    }
  });
});

// Dropdown lingue
const btn = document.querySelector('.language-button');
const dropdown = document.getElementById('lang-dropdown');

btn.addEventListener('click', function (e) {
  e.stopPropagation();
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  btn.classList.toggle('active');
});

window.addEventListener('click', function (e) {
  if (!btn.contains(e.target)) {
    dropdown.style.display = 'none';
    btn.classList.remove('active');
  }
});

// Modali immagini TOP 10
document.querySelectorAll('.flex-img img').forEach(img => {
  img.addEventListener('click', function () {
    const modalId = 'myModal' + this.id.replace('openModal', '');
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
  });
});

document.querySelectorAll('.close-button').forEach(btn => {
  btn.addEventListener('click', function () {
    this.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', function (event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Click su lingua
document.querySelectorAll('#lang-dropdown li').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.lang-text').innerText = this.innerText;
    dropdown.style.display = 'none';
    btn.classList.remove('active');
    traduzirPara(this.innerText);
  });
});

// Traduzioni

  const translations = {
  'Português': {
    h1: 'Filmes, séries e muito mais, sem limites',
    h2: 'A partir de €6,99. Cancele quando quiser.',
    h4: 'Quer assistir à Netflix? Insira seu e-mail para assinar ou reativar sua assinatura.',
    notificationTitle: 'Tudo o que você ama na Netflix por apenas €6,99.',
    notificationText: 'Aproveite nosso plano com anúncios: é o mais econômico.',
    buttonStart: 'Começar',
    notificationBtn: 'Saiba mais',
    top10Title: 'Títulos em alta',
    faqTitle: 'Perguntas frequentes',
    faq: [
      {
        q: 'O que é a Netflix?',
        a: 'A Netflix é um serviço de streaming que oferece uma variedade de séries, filmes, documentários premiados e muito mais em diversos dispositivos conectados à internet.'
      },
      {
        q: 'Quanto custa a Netflix?',
        a: 'Planos de €6,99 a €19,99 por mês. Sem custos extras, sem contratos.'
      },
      {
        q: 'Onde posso assistir à Netflix?',
        a: 'Assista à Netflix onde e quando quiser em qualquer dispositivo compatível.'
      },
      {
        q: 'Como cancelo?',
        a: 'Você pode cancelar online facilmente a qualquer momento, sem taxas.'
      },
      {
        q: 'O que posso assistir na Netflix?',
        a: 'Filmes, séries, documentários, animes e muito mais.'
      },
      {
        q: 'A Netflix é adequada para crianças?',
        a: 'Perfis infantis têm filtro de idade e PIN para limitar conteúdos.'
      }
    ],
    faqInput: 'Pronto para assistir? Insira seu e-mail para criar ou reativar sua assinatura.',
    faqInputPlaceholder: 'Endereço de e-mail',
    footerContact: 'Dúvidas? Ligue para',
    footerCountry: 'Netflix Brasil',
    footerLinks: [
      'Perguntas frequentes', 'Relações com investidores', 'Formas de assistir', 'Informações corporativas',
      'Avisos legais', 'Privacidade', 'Central de Ajuda', 'Trabalhe conosco',
      'Termos de uso', 'Fale conosco', 'Só na Netflix', 'Conta',
      'Resgatar cartão pré-pago', 'Preferências de cookies', 'Teste de velocidade', 'Garantia legal'
    ]
  },
  'English': {
    h1: 'Unlimited movies, TV shows, and more',
    h2: 'Starting at €6.99. Cancel anytime.',
    h4: 'Ready to watch? Enter your email to create or restart your membership.',
    notificationTitle: 'Everything you love about Netflix for just €6.99.',
    notificationText: 'Try our ad-supported plan — our most affordable.',
    buttonStart: 'Get Started',
    notificationBtn: 'Learn more',
    top10Title: 'Trending Titles',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What is Netflix?',
        a: 'Netflix is a streaming service offering a wide variety of award-winning shows, movies, and more.'
      },
      {
        q: 'How much does Netflix cost?',
        a: 'Plans range from €6.99 to €19.99 per month. No extra fees or contracts.'
      },
      {
        q: 'Where can I watch?',
        a: 'Watch anywhere, anytime, on any compatible device.'
      },
      {
        q: 'How do I cancel?',
        a: 'Cancel easily online at any time, with no fees.'
      },
      {
        q: 'What can I watch on Netflix?',
        a: 'TV shows, movies, documentaries, anime, and more.'
      },
      {
        q: 'Is Netflix good for kids?',
        a: 'Kids profiles include parental controls and content filters.'
      }
    ],
    faqInput: 'Ready to watch? Enter your email to create or restart your membership.',
    faqInputPlaceholder: 'Email address',
    footerContact: 'Questions? Call',
    footerCountry: 'Netflix United Kingdom',
    footerLinks: [
      'FAQ', 'Investor Relations', 'Ways to Watch', 'Corporate Information',
      'Legal Notices', 'Privacy', 'Help Center', 'Jobs',
      'Terms of Use', 'Contact Us', 'Only on Netflix', 'Account',
      'Redeem Gift Cards', 'Cookie Preferences', 'Speed Test', 'Legal Guarantee'
    ]
  },
  'Español': {
    h1: 'Películas, series y mucho más, sin límites',
    h2: 'Desde €6,99. Cancela cuando quieras.',
    h4: '¿Quieres ver Netflix? Ingresa tu email para suscribirte o reactivar tu cuenta.',
    notificationTitle: 'Todo lo que te gusta de Netflix por solo €6,99.',
    notificationText: 'Prueba nuestro plan con anuncios: el más económico.',
    buttonStart: 'Empezar',
    notificationBtn: 'Más información',
    top10Title: 'Títulos populares',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Qué es Netflix?',
        a: 'Netflix es un servicio de streaming con series, películas, documentales y más.'
      },
      {
        q: '¿Cuánto cuesta Netflix?',
        a: 'Planes desde €6,99 hasta €19,99 por mes. Sin costes adicionales.'
      },
      {
        q: '¿Dónde puedo ver Netflix?',
        a: 'Puedes verlo en cualquier momento y lugar en dispositivos compatibles.'
      },
      {
        q: '¿Cómo cancelo?',
        a: 'Cancela en línea fácilmente en cualquier momento.'
      },
      {
        q: '¿Qué puedo ver en Netflix?',
        a: 'Películas, series, documentales, anime y más.'
      },
      {
        q: '¿Netflix es bueno para niños?',
        a: 'Perfiles infantiles con controles parentales y filtros de contenido.'
      }
    ],
    faqInput: '¿Listo para ver? Ingresa tu email para suscribirte o reactivar tu cuenta.',
    faqInputPlaceholder: 'Dirección de correo electrónico',
    footerContact: '¿Preguntas? Llama al',
    footerCountry: 'Netflix España',
    footerLinks: [
      'Preguntas frecuentes', 'Relaciones con inversionistas', 'Formas de ver', 'Información corporativa',
      'Avisos legales', 'Privacidad', 'Centro de ayuda', 'Empleos',
      'Términos de uso', 'Contáctanos', 'Solo en Netflix', 'Cuenta',
      'Canjear tarjetas de regalo', 'Preferencias de cookies', 'Prueba de velocidad', 'Garantía legal'
    ]
  }
};



// Funzione di traduzione dinamica
function traduzirPara(lang) {
  const t = translations[lang];
  if (!t) {
    console.warn(`Tradução não encontrada para: ${lang}`);
    return;
  }

  document.querySelector('.conteinerlogin h1').innerText = t.h1;
  document.querySelector('.conteinerlogin h2').innerText = t.h2;
  document.querySelector('.loginh4').innerText = t.h4;
  document.querySelector('.notification .title').innerText = t.notificationTitle;
  document.querySelector('.notification .message p').innerText = t.notificationText;
  document.querySelector('.notification .message button').innerText = t.notificationBtn;
  document.querySelector('.button-log').innerText = t.buttonStart;
  document.querySelector('.titoli10p').innerText = t.top10Title;
  document.querySelector('.section-title').innerText = t.faqTitle;

  // FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  t.faq.forEach((faq, index) => {
    const item = faqItems[index];
    if (item) {
      const q = item.querySelector('.faq-question h3');
      const a = item.querySelector('.faq-answer p');
      if (q) q.innerText = faq.q;
      if (a) a.innerText = faq.a;
    }
  });

  // Email input
  document.querySelector('.questionContact h4').innerText = t.faqInput;
  document.querySelector('.questionContact input[type="email"]').placeholder = t.faqInputPlaceholder;

  // Footer
  document.querySelector('.footer-contact-text').innerText = t.footerContact;
  document.querySelector('.netflix-country').innerText = t.footerCountry;

  const footerLinks = document.querySelectorAll('.footer-links-grid li');
  t.footerLinks.forEach((txt, i) => {
    if (footerLinks[i]) footerLinks[i].innerText = txt;
  });
}

// Traduzione iniziale in inglese
document.addEventListener('DOMContentLoaded', function () {
  traduzirPara('English');
});



