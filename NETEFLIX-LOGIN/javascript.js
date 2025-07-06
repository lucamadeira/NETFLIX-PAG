// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function () {
    const answer = item.querySelector('.faq-answer');
    if (answer) {
      // Toggle display with a more robust check for 'none' or 'block'
      answer.style.display = (window.getComputedStyle(answer).display === "block") ? "none" : "block";
    }
  });
});

// Validazione email
const containerInput = document.getElementById("containerInput");
const emailInput = document.getElementById("email");

// Changed to target all buttons with data-translate="startButton" or "startButton2"
const allStartButtons = document.querySelectorAll('[data-translate="startButton"], [data-translate="startButton2"]');


function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Prevent default form submission and clear email
if (containerInput) {
    containerInput.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        // You might want to add email validation logic here before clearing
        console.log("Email submitted:", email);
        emailInput.value = "";
    });
}


Array.from(allStartButtons).forEach(function (button) {
  button.addEventListener('click', function (event) {
    // Only check for the primary email input, as the second one has a different purpose
    if (emailInput && emailInput.value === '') {
      // Usa la lingua da localStorage per il messaggio di alert
      const currentLang = localStorage.getItem('selectedLanguage') || 'Italiano';
      alert(translations[currentLang].alertEmailEmpty);
      event.preventDefault(); // Prevent form submission if email is empty
    }
  });
});


// Dropdown lingue
const btn = document.querySelector('.language-button');
const dropdown = document.getElementById('lang-dropdown');

if (btn && dropdown) {
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
}


// Modali immagini TOP 10 (rimane uguale)
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
    const selectedLang = item.getAttribute('data-lang') || item.innerText; // Use data-lang or innerText
    document.querySelector('.lang-text').innerText = item.innerText; // Display the full language name
    dropdown.style.display = 'none';
    btn.classList.remove('active');
    traduzirPara(selectedLang);
    localStorage.setItem('selectedLanguage', selectedLang); // Salva la lingua in localStorage
  });
});


// Traduzioni
const translations = {
  'Italiano': {
    documentTitle: 'Netflix Italia - Guarda serie TV e film online',
    signInButton: 'Accedi',
    mainTitle: 'Film, serie TV e tanto altro, senza limiti',
    subtitle: 'A partire da 6,99 €. Disdici quando vuoi.',
    ctaText: 'Vuoi guardare Netflix? Inserisci l\'indirizzo email per abbonarti o riattivare il tuo abbonamento.',
    emailPlaceholder: 'Indirizzo email',
    startButton: 'Inizia',
    notificationTitle: 'Tutto ciò che ami di Netflix a soli 6,99 €.',
    notificationText: 'Approfitta del nostro piano con pubblicità: è il più conveniente.',
    learnMoreButton: 'Scopri di più',
    trendingTitles: 'I titoli del momento',
    squidGameTitle: 'Squid Game',
    squidGameDesc: 'Centinaia di individui a corto di denaro accettano uno strano invito a competere in giochi per bambini. Li attende un premio invitante, ma la posta in gioco è mortale.',
    ginnyGeorgiaTitle: 'Ginny & Georgia',
    ginnyGeorgiaDesc: 'Mamma dallo spirito libero, Georgia si trasferisce a nord insieme ai figli Ginny e Austin... ma la famiglia scopre che la via del nuovo inizio può essere accidentata.',
    titanTitle: 'Titan',
    titanDesc: 'Il sommergibile turistico Titan di OceanGate è imploso nel 2023 durante un\'immersione nelle profondità del Titanic. Questo documentario racconta come una visione audace si sia conclusa in tragedia.',
    youTitle: 'You',
    youDesc: 'Un libraio affascinante e ossessivo usa i social media per entrare nelle vite delle persone di cui si innamora, trasformando la sua cotta in una spirale di stalking e violenza.', // Corrected translation based on typical plot
    koTitle: 'K.o',
    koDesc: 'Un ex lottatore affronta una violenta banda criminale di Marsiglia per ritrovare il figlio di un avversario da lui ucciso involontariamente anni prima.',
    machiVeriTitle: 'Machi Veri',
    machiVeriDesc: 'I quattro amici di lunga data Massimo, Mattia, Luigi e Riccardo si destreggiano tra relazioni, carriera e vita romantica nel mondo moderno che mette alla prova i maschi.',
    olympoTitle: 'Olympo',
    olympoDesc: 'Quando una nuotatrice ha un malore in un centro sportivo ad alto rendimento, Amaia indaga sui rischi estremi che gli altri atleti corrono pur di alimentare la loro ambizione.',
    strawTitle: 'Straw Senza Uscita',
    strawDesc: 'Quale sarà la goccia che fa traboccare il vaso? Una brutta giornata spinge un\'instancabile madre single al punto di rottura e a uno scioccante gesto di disperazione.',
    kpopTitle: 'Kpop Demon Hunters',
    kpopDesc: 'Quando le superstar del K-pop Rumi, Mira e Zoey non riempiono gli stadi, usano i loro poteri segreti per proteggere i fan dalle minacce soprannaturali.',
    endOfTheWorldTitle: 'Io Sono La Fine Del Mondo',
    endOfTheWorldDesc: 'Angelo è costretto a prendersi cura dei genitori anziani e coglie l\'occasione per dare loro un assaggio delle rigide regole con cui è cresciuto.',
    moreReasonsTitle: 'Motivi in più per abbonarsi',
    card1Title: 'Goditi Netflix sulla tua TV',
    card1Desc: 'Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.',
    card2Title: 'Scarica le tue serie da guardare offline',
    card2Desc: 'Salva facilmente i tuoi preferiti e avrai sempre qualcosa da guardare.',
    card3Title: 'Guarda ovunque',
    card3Desc: 'Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti.',
    card4Title: 'Crea profili per bambini',
    card4Desc: 'I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.',
    faqTitle: 'Domande frequenti',
    faq1Q: 'Cos\'è Netflix?',
    faq1A: 'Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet. Guarda quello che vuoi, quando vuoi. Il tutto a una quota mensile ridotta. C\'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi film e serie TV ogni settimana!',
    faq2Q: 'Quanto costa Netflix?',
    faq2A: 'Guarda Netflix su smartphone, tablet, Smart TV, laptop o dispositivi per lo streaming, il tutto per un importo mensile fisso. Piani da 6,99 € a 19,99 € al mese. Nessun costo aggiuntivo, nessun contratto.',
    faq3Q: 'Dove posso guardare Netflix?',
    faq3A: 'Guarda Netflix dove vuoi, quando vuoi. Accedi al tuo account per guardare subito Netflix dal tuo computer su netflix.com oppure da qualsiasi dispositivo connesso a Internet che supporta l\'app Netflix, come smart TV, smartphone, tablet, lettori multimediali per streaming e console per videogiochi. Con l\'app per iOS o Android puoi anche scaricare i tuoi programmi preferiti. Usa la funzionalità di download per guardare i contenuti mentre sei in viaggio e senza connessione a Internet. Porta Netflix sempre con te.',
    faq4Q: 'Come posso disdire?',
    faq4A: 'Netflix è flessibile. Nessun contratto fastidioso e nessun impegno. Puoi facilmente disdire il tuo contratto online con due clic. Nessuna penale: attiva o disdici il tuo account in qualsiasi momento.',
    faq5Q: 'Cosa posso guardare su Netflix?',
    faq5A: 'Netflix ha un nutrito catalogo di lungometraggi, documentari, serie TV, anime, originali Netflix pluripremiati e tanto altro. Guarda tutto quello che vuoi, in qualsiasi momento.',
    faq6Q: 'Netflix è adatto ai bambini?',
    faq6A: 'L\'area Netflix Bambini, già inclusa nell\'abbonamento, offre ai genitori un maggiore controllo sui contenuti e ai più piccoli uno spazio dedicato dove guardare serie TV e film per tutta la famiglia. I profili Bambini hanno un filtro famiglia con PIN che ti permette di limitare l\'accesso ai contenuti in base alla fascia d\'età e bloccare la visione di titoli specifici.',
    faqInput: 'Pronto per guardare? Inserisci la tua email per creare o riattivare il tuo abbonamento.',
    faqInputPlaceholder: 'Indirizzo e-mail',
    startButton2: 'Inizia',
    footerContact: 'Domande? Chiama',
    footerLink1: 'Domande frequenti',
    footerLink2: 'Relazioni con gli investitori',
    footerLink3: 'Modi per guardare',
    footerLink4: 'Informazioni aziendali',
    footerLink5: 'Note legali',
    footerLink6: 'Privacy',
    footerLink7: 'Centro assistenza',
    footerLink8: 'Lavora con noi',
    footerLink9: 'Termini di utilizzo',
    footerLink10: 'Contattaci',
    footerLink11: 'Solo su Netflix',
    footerLink12: 'Account',
    footerLink13: 'Riscatta le carte regalo',
    footerLink14: 'Preferenze sui cookie',
    footerLink15: 'Test di velocità',
    footerLink16: 'Garanzia legale',
    footerCountry: 'Netflix Italia',
    alertEmailEmpty: 'Per favore, inserisci la tua email.' 
  },
  'Português': {
    documentTitle: 'Netflix Portugal - Assista a séries e filmes online',
    signInButton: 'Entrar',
    mainTitle: 'Filmes, séries e muito mais, sem limites', 
    subtitle: 'A partir de €6,99. Cancele quando quiser.', 
    ctaText: 'Quer assistir à Netflix? Insira seu e-mail para assinar ou reativar sua assinatura.', 
    emailPlaceholder: 'Endereço de e-mail',
    startButton: 'Começar', 
    notificationTitle: 'Tudo o que você ama na Netflix por apenas €6,99.',
    notificationText: 'Aproveite nosso plano com anúncios: é o mais econômico.',
    learnMoreButton: 'Saiba mais', 
    trendingTitles: 'Títulos em alta', 
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
    startButton2: 'Começar',
    footerContact: 'Dúvidas? Ligue para',
    footerCountry: 'Netflix Brasil',
    footerLink1: 'Perguntas frequentes',
    footerLink2: 'Relações com investidores',
    footerLink3: 'Formas de assistir',
    footerLink4: 'Informações corporativas',
    footerLink5: 'Avisos legais',
    footerLink6: 'Privacidade',
    footerLink7: 'Central de Ajuda',
    footerLink8: 'Trabalhe conosco',
    footerLink9: 'Termos de uso',
    footerLink10: 'Fale conosco',
    footerLink11: 'Só na Netflix',
    footerLink12: 'Conta',
    footerLink13: 'Resgatar cartão pré-pago',
    footerLink14: 'Preferências de cookies',
    footerLink15: 'Teste de velocidade',
    footerLink16: 'Garantia legal',
    squidGameTitle: 'Squid Game',
    squidGameDesc: 'Centenas de indivíduos com problemas de dinheiro aceitam um convite estranho para competir em jogos infantis. Um prêmio tentador os aguarda, mas a aposta é mortal.',
    ginnyGeorgiaTitle: 'Ginny & Georgia',
    ginnyGeorgiaDesc: 'Mãe de espírito livre, Georgia se muda para o norte com seus filhos Ginny e Austin... mas a família descobre que o caminho para um novo começo pode ser acidentado.',
    titanTitle: 'Titan',
    titanDesc: 'O submersível turístico Titan da OceanGate implodiu em 2023 durante um mergulho nas profundezas do Titanic. Este documentário narra como uma visão audaciosa terminou em tragédia.',
    youTitle: 'You',
    youDesc: 'Um livreiro charmoso e obsessivo usa as redes sociais para entrar na vida das pessoas por quem se apaixona, transformando sua paixão em uma espiral de perseguição e violência.',
    koTitle: 'K.o',
    koDesc: 'Um ex-lutador enfrenta uma violenta gangue criminosa de Marselha para encontrar o filho de um adversário que ele matou acidentalmente anos antes.',
    machiVeriTitle: 'Machi Veri',
    machiVeriDesc: 'Os quatro amigos de longa data Massimo, Mattia, Luigi e Riccardo lidam com relacionamentos, carreira e vida romântica no mundo moderno que testa os homens.',
    olympoTitle: 'Olympo',
    olympoDesc: 'Quando uma nadadora fica doente em um centro esportivo de alto rendimento, Amaia investiga os riscos extremos que outros atletas correm para alimentar sua ambição.',
    strawTitle: 'Straw Sem Saída',
    strawDesc: 'Qual será a gota d\'água? Um dia ruim leva uma mãe solteira incansável ao ponto de ruptura e a um gesto chocante de desespero.',
    kpopTitle: 'Kpop Demon Hunters',
    kpopDesc: 'Quando as superestrelas do K-pop Rumi, Mira e Zoey não lotam os estádios, elas usam seus poderes secretos para proteger os fãs de ameaças sobrenaturais.',
    endOfTheWorldTitle: 'Eu Sou O Fim Do Mundo',
    endOfTheWorldDesc: 'Angelo é forçado a cuidar de seus pais idosos e aproveita a oportunidade para dar a eles um gostinho das regras rígidas com as quais cresceu.',
    moreReasonsTitle: 'Mais razões para assinar',
    card1Title: 'Aproveite a Netflix na sua TV',
    card1Desc: 'Assista Netflix em smart TVs, Playstation, Xbox, Chromecast, Apple TV, reprodutores de Blu-ray e muitos outros dispositivos.',
    card2Title: 'Baixe suas séries para assistir offline',
    card2Desc: 'Salve facilmente seus favoritos e sempre terá algo para assistir.',
    card3Title: 'Assista em qualquer lugar',
    card3Desc: 'Celular, tablet, laptop e TV: escolha o que usar para assistir filmes e séries de TV ilimitados em streaming.',
    card4Title: 'Crie perfis para crianças',
    card4Desc: 'A área Netflix Kids, já incluída na assinatura, oferece aos pais maior controle sobre o conteúdo e às crianças um espaço dedicado para assistir séries de TV e filmes para toda a família.',
    alertEmailEmpty: 'Por favor, insira seu email.'
  },
  'English': {
    documentTitle: 'Netflix - Watch TV Shows Online, Watch Movies Online',
    signInButton: 'Sign In',
    mainTitle: 'Unlimited movies, TV shows, and more',
    subtitle: 'Starting at €6.99. Cancel anytime.',
    ctaText: 'Ready to watch? Enter your email to create or restart your membership.',
    emailPlaceholder: 'Email address',
    startButton: 'Started',
    notificationTitle: 'Everything you love about Netflix for just €6.99.',
    notificationText: 'Try our ad-supported plan — our most affordable.',
    learnMoreButton: 'Learn more',
    trendingTitles: 'Trending Titles',
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
    startButton2: 'Started',
    footerContact: 'Questions? Call',
    footerCountry: 'Netflix United Kingdom',
    footerLink1: 'FAQ',
    footerLink2: 'Investor Relations',
    footerLink3: 'Ways to Watch',
    footerLink4: 'Corporate Information',
    footerLink5: 'Legal Notices',
    footerLink6: 'Privacy',
    footerLink7: 'Help Center',
    footerLink8: 'Jobs',
    footerLink9: 'Terms of Use',
    footerLink10: 'Contact Us',
    footerLink11: 'Only on Netflix',
    footerLink12: 'Account',
    footerLink13: 'Redeem Gift Cards',
    footerLink14: 'Cookie Preferences',
    footerLink15: 'Speed Test',
    footerLink16: 'Legal Guarantee',
    squidGameTitle: 'Squid Game',
    squidGameDesc: 'Hundreds of cash-strapped contestants accept an invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.',
    ginnyGeorgiaTitle: 'Ginny & Georgia',
    ginnyGeorgiaDesc: 'Free-spirited Georgia moves north with her children Ginny and Austin... but the family discovers that the path to a fresh start can be bumpy.',
    titanTitle: 'Titan',
    titanDesc: 'OceanGate\'s Titan submersible imploded in 2023 during a deep dive to the Titanic. This documentary tells how a bold vision ended in tragedy.',
    youTitle: 'You',
    youDesc: 'A charming, obsessive bookstore manager uses social media to insert himself into the lives of the women he becomes infatuated with, turning his crushes into a spiral of stalking and violence.',
    koTitle: 'K.o',
    koDesc: 'A former wrestler takes on a violent criminal gang in Marseille to find the son of an opponent he unintentionally killed years ago.',
    machiVeriTitle: 'Machi Veri',
    machiVeriDesc: 'Four long-time friends, Massimo, Mattia, Luigi, and Riccardo, juggle relationships, careers, and romantic lives in the modern world that challenges men.',
    olympoTitle: 'Olympo',
    olympoDesc: 'When a swimmer falls ill at a high-performance sports center, Amaia investigates the extreme risks other athletes take to fuel their ambition.',
    strawTitle: 'Straw Without Exit',
    strawDesc: 'What will be the last straw? A bad day pushes a tireless single mother to her breaking point and to a shocking act of desperation.',
    kpopTitle: 'Kpop Demon Hunters',
    kpopDesc: 'When K-pop superstars Rumi, Mira, and Zoey aren\'t filling stadiums, they use their secret powers to protect fans from supernatural threats.',
    endOfTheWorldTitle: 'I Am The End Of The World',
    endOfTheWorldDesc: 'Angelo is forced to take care of his elderly parents and seizes the opportunity to give them a taste of the strict rules he grew up with.',
    moreReasonsTitle: 'More reasons to join',
    card1Title: 'Enjoy Netflix on your TV',
    card1Desc: 'Watch Netflix on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and many more devices.',
    card2Title: 'Download your shows to watch offline',
    card2Desc: 'Easily save your favorites and always have something to watch.',
    card3Title: 'Watch anywhere',
    card3Desc: 'Mobile, tablet, laptop, and TV: choose what to use to stream unlimited movies and TV shows.',
    card4Title: 'Create profiles for kids',
    card4Desc: 'The Netflix Kids area, already included in the subscription, offers parents greater control over content and a dedicated space for children to watch family-friendly TV shows and movies.',
    alertEmailEmpty: 'Please enter your email.'
  },
  'Español': {
    documentTitle: 'Netflix España - Mira series y películas online',
    signInButton: 'Iniciar',
    mainTitle: 'Películas, series y mucho más, sin límites', 
    subtitle: 'Desde €6,99. Cancela cuando quieras.', 
    ctaText: '¿Quieres ver Netflix? Ingresa tu email para suscribirte o reactivar tu cuenta.', 
    emailPlaceholder: 'Dirección de correo electrónico',
    startButton: 'Empezar',
    notificationTitle: 'Todo lo que te gusta de Netflix por solo €6,99.',
    notificationText: 'Prueba nuestro plan con anuncios: el más económico.',
    learnMoreButton: 'Más información', 
    trendingTitles: 'Títulos populares', 
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
    startButton2: 'Empezar',
    footerContact: '¿Preguntas? Llama al',
    footerCountry: 'Netflix España',
    footerLink1: 'Preguntas frecuentes',
    footerLink2: 'Relaciones con inversionistas',
    footerLink3: 'Formas de ver',
    footerLink4: 'Información corporativa',
    footerLink5: 'Avisos legales',
    footerLink6: 'Privacidad',
    footerLink7: 'Centro de ayuda',
    footerLink8: 'Empleos',
    footerLink9: 'Términos de uso',
    footerLink10: 'Contáctanos',
    footerLink11: 'Solo en Netflix',
    footerLink12: 'Cuenta',
    footerLink13: 'Canjear tarjetas de regalo',
    footerLink14: 'Preferencias de cookies',
    footerLink15: 'Prueba de velocidad',
    footerLink16: 'Garantía legal',
    squidGameTitle: 'El Juego del Calamar',
    squidGameDesc: 'Cientos de personas con problemas de dinero aceptan una extraña invitación para competir en juegos infantiles. Les espera un tentador premio, pero lo que está en juego es mortal.',
    ginnyGeorgiaTitle: 'Ginny y Georgia',
    ginnyGeorgiaDesc: 'Georgia, una madre de espíritu libre, se muda al norte con sus hijos Ginny y Austin... pero la familia descubre que el camino hacia un nuevo comienzo puede ser accidentado.',
    titanTitle: 'Titan',
    titanDesc: 'El sumergible turístico Titan de OceanGate implosionó en 2023 durante una inmersión en las profundidades del Titanic. Este documental narra cómo una visión audaz terminó en tragedia.',
    youTitle: 'You',
    youDesc: 'Un librero encantador y obsesivo usa las redes sociales para inmiscuirse en la vida de las mujeres de las que se enamora, convirtiendo sus flechazos en una espiral de acoso y violencia.',
    koTitle: 'K.o',
    koDesc: 'Un exluchador se enfrenta a una violenta banda criminal de Marsella para encontrar al hijo de un oponente al que mató sin querer años atrás.',
    machiVeriTitle: 'Machi Veri',
    machiVeriDesc: 'Los cuatro amigos de toda la vida Massimo, Mattia, Luigi y Riccardo hacen malabares con las relaciones, las carreras y la vida romántica en el mundo moderno que pone a prueba a los hombres.',
    olympoTitle: 'Olympo',
    olympoDesc: 'Cuando una nadadora se enferma en un centro deportivo de alto rendimiento, Amaia investiga los riesgos extremos que otros atletas corren para alimentar su ambición.',
    strawTitle: 'Straw Sin Salida',
    strawDesc: '¿Cuál será la gota que colme el vaso? Un mal día empuja a una incansable madre soltera al límite y a un impactante acto de desesperación.',
    kpopTitle: 'Kpop Demon Hunters',
    kpopDesc: 'Cuando las superestrellas del K-pop Rumi, Mira y Zoey no llenan estadios, usan sus poderes secretos para proteger a los fans de amenazas sobrenaturales.',
    endOfTheWorldTitle: 'Soy El Fin Del Mundo',
    endOfTheWorldDesc: 'Angelo se ve obligado a cuidar de sus padres mayores y aprovecha la oportunidad para darles una probadita de las estrictas reglas con las que creció.',
    moreReasonsTitle: 'Más razones para unirse',
    card1Title: 'Disfruta de Netflix en tu TV',
    card1Desc: 'Mira Netflix en televisores inteligentes, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y muchos otros dispositivos.',
    card2Title: 'Descarga tus series para verlas sin conexión',
    card2Desc: 'Guarda fácilmente tus favoritos y siempre tendrás algo que ver.',
    card3Title: 'Celular, tableta, computadora portátil y TV: elige qué usar para transmitir películas y series de TV ilimitadas.',
    card4Title: 'Crea perfiles para niños',
    card4Desc: 'El área de Netflix Niños, ya incluida en la suscripción, ofrece a los padres un mayor control sobre el contenido y a los más pequeños un espacio dedicado para ver series y películas aptas para toda la familia.',
    alertEmailEmpty: 'Por favor, introduce tu correo electrónico.'
  }
};


// Funzione di traduzione dinamica
function traduzirPara(lang) {
  const t = translations[lang];
  if (!t) {
    console.warn(`Traduzione non trovata per: ${lang}`);
    return;
  }

  // Translate elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (t[key] !== undefined) { // Check if translation key exists
        element.innerText = t[key];
    }
  });

  // Translate placeholder attributes
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (element.tagName === 'INPUT' && element.hasAttribute('placeholder') && t[key] !== undefined) {
      element.placeholder = t[key];
    }
  });

  // FAQ
  // This section assumes your HTML FAQ items match the order in your translations.faq array
  const faqItems = document.querySelectorAll('.faq-item');
  if (t.faq) {
    t.faq.forEach((faq, index) => {
      const item = faqItems[index];
      if (item) {
        const q = item.querySelector('.faq-question h3');
        const a = item.querySelector('.faq-answer p');
        if (q) q.innerText = faq.q;
        if (a) a.innerText = faq.a;
      }
    });
  }

  // Footer Links
  // This section assumes your HTML footer links match the order in your translations.footerLinks array
  const footerLinks = document.querySelectorAll('.footer-links-grid li');
  if (t.footerLinks) {
    t.footerLinks.forEach((txt, i) => {
      if (footerLinks[i]) {
        // Assuming the footer links also have anchors inside them that need text changed
        const linkElement = footerLinks[i].querySelector('a');
        if (linkElement) {
          linkElement.innerText = txt;
        } else {
          footerLinks[i].innerText = txt; // Fallback if no anchor
        }
      }
    });
  }

  // Update specific elements that were previously targeted by class/ID but now have data-translate
  // For elements that *didn't* get a data-translate attribute because they are handled
  // by specific selectors already, ensure they still work.
  // Example for the language dropdown text (which has no data-translate because it updates dynamically):
  const langTextSpan = document.querySelector('.lang-text');
  if (langTextSpan) {
    // Set initial language text based on the default or last selected
    // This might be better handled by setting the 'lang' attribute on HTML
    // and then reading from there, but for direct display, this works.
    if (lang === 'Italiano') langTextSpan.innerText = 'Italiano';
    else if (lang === 'Português') langTextSpan.innerText = 'Português';
    else if (lang === 'English') langTextSpan.innerText = 'English';
    else if (lang === 'Español') langTextSpan.innerText = 'Español';
  }

  // Handle the title tag
  const titleElement = document.querySelector('title');
  if (titleElement && t.documentTitle) {
      titleElement.innerText = t.documentTitle;
  }
}

// Traduzione iniziale quando la pagina è caricata (legge da localStorage)
document.addEventListener('DOMContentLoaded', function () {
  const storedLang = localStorage.getItem('selectedLanguage'); // Recupera la lingua da localStorage
  if (storedLang) {
    traduzirPara(storedLang); // Applica la traduzione salvata
    // Aggiorna anche il testo visualizzato nel pulsante della lingua della homepage
    const langTextSpan = document.querySelector('.lang-text');
    if (langTextSpan) {
        // Questo pezzo di codice mappa la lingua memorizzata al suo testo di visualizzazione completo
        if (storedLang === 'Italiano') langTextSpan.innerText = 'Italiano';
        else if (storedLang === 'Português') langTextSpan.innerText = 'Português';
        else if (storedLang === 'English') langTextSpan.innerText = 'English';
        else if (storedLang === 'Español') langTextSpan.innerText = 'Español';
        // Aggiungi altri casi se hai più lingue
    }
  } else {
    traduzirPara('Italiano'); // Se nessuna lingua è memorizzata, imposta l'italiano come predefinito
  }
});