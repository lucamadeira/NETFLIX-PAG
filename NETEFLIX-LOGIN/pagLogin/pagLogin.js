 document.querySelector('.btn-red').addEventListener('click', function (e) {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const emailError = document.getElementById('email-error');
      const passwordError = document.getElementById('password-error');
      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value.trim();

      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
      const isValidPhone = /^[0-9]{6,}$/.test(emailValue);

      if (!emailValue || (!isValidEmail && !isValidPhone)) {
        emailError.style.display = 'block';
        emailInput.classList.add('invalid');
      } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('invalid');
      }

      if (!passwordValue) {
        passwordError.style.display = 'block';
        passwordInput.classList.add('invalid');
      } else {
        passwordError.style.display = 'none';
        passwordInput.classList.remove('invalid');
      }
    });
    
    // Traduzioni specifiche per la pagina di login
const translations = {
  'Italiano': {
    documentTitle: 'Netflix Login',
    loginTitle: 'Accedi',
    emailPlaceholder: 'Indirizzo email o numero di cellulare',
    emailError: 'Inserisci un indirizzo email o numero di telefono valido.',
    passwordPlaceholder: 'Password',
    passwordError: 'La password deve avere una lunghezza compresa tra 4 e 60 caratteri.',
    signInButtonLogin: 'Accedi',
    orSeparator: 'OPPURE',
    useCodeButton: 'Usa un codice di accesso',
    forgotPassword: 'Hai dimenticato la password?',
    rememberMe: 'Ricordami',
    firstTimeNetflix: 'Prima volta su Netflix?',
    signUpNow: 'Registrati ora.',
    recaptchaInfo: 'Questa pagina è protetta da Google reCAPTCHA per garantire che tu non sia un bot.',
    learnMore: 'Scopri di più.',
    footerQuestions: 'Domande? Contattaci.',
    footerLink1: 'Domande frequenti',
    footerLink2: 'Preferenze per i cookie',
    footerLink3: 'Centro assistenza',
    footerLink4: 'Informazioni sull\'azienda',
    footerLink5: 'Condizioni di utilizzo',
    footerLink6: 'Preferenze per la pubblicità',
    footerLink7: 'Privacy',
    alertEmailEmpty: 'Per favore, inserisci la tua email o numero di cellulare.',
    alertPasswordEmpty: 'Per favore, inserisci la tua password.',
  },
  'Português': {
    documentTitle: 'Netflix Login',
    loginTitle: 'Entrar',
    emailPlaceholder: 'Email ou número de telefone',
    emailError: 'Insira um email ou número de telefone válido.',
    passwordPlaceholder: 'Senha',
    passwordError: 'A senha deve ter entre 4 e 60 caracteres.',
    signInButtonLogin: 'Entrar',
    orSeparator: 'OU',
    useCodeButton: 'Usar um código de acesso',
    forgotPassword: 'Esqueceu a senha?',
    rememberMe: 'Lembre-se de mim',
    firstTimeNetflix: 'É sua primeira vez na Netflix?',
    signUpNow: 'Assine agora.',
    recaptchaInfo: 'Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.',
    learnMore: 'Saiba mais.',
    footerQuestions: 'Dúvidas? Entre em contato.',
    footerLink1: 'Perguntas frequentes',
    footerLink2: 'Preferências de cookies',
    footerLink3: 'Central de Ajuda',
    footerLink4: 'Informações corporativas',
    footerLink5: 'Termos de uso',
    footerLink6: 'Preferências de anúncios',
    footerLink7: 'Privacidade',
    alertEmailEmpty: 'Por favor, insira seu email ou número de telefone.',
    alertPasswordEmpty: 'Por favor, insira sua senha.',
  },
  'English': {
    documentTitle: 'Netflix Login',
    loginTitle: 'Sign In',
    emailPlaceholder: 'Email or phone number',
    emailError: 'Please enter a valid email or phone number.',
    passwordPlaceholder: 'Password',
    passwordError: 'Your password must contain between 4 and 60 characters.',
    signInButtonLogin: 'Sign In',
    orSeparator: 'OR',
    useCodeButton: 'Use a sign-in code',
    forgotPassword: 'Forgot password?',
    rememberMe: 'Remember me',
    firstTimeNetflix: 'New to Netflix?',
    signUpNow: 'Sign up now.',
    recaptchaInfo: 'This page is protected by Google reCAPTCHA to ensure you\'re not a bot.',
    learnMore: 'Learn more.',
    footerQuestions: 'Questions? Contact us.',
    footerLink1: 'FAQ',
    footerLink2: 'Cookie Preferences',
    footerLink3: 'Help Centre',
    footerLink4: 'Corporate Information',
    footerLink5: 'Terms of Use',
    footerLink6: 'Ad Choices',
    footerLink7: 'Privacy',
    alertEmailEmpty: 'Please enter your email or phone number.',
    alertPasswordEmpty: 'Please enter your password.',
  },
  'Español': {
    documentTitle: 'Netflix Iniciar Sesión',
    loginTitle: 'Iniciar Sesión',
    emailPlaceholder: 'Correo electrónico o número de teléfono',
    emailError: 'Introduce un correo electrónico o número de teléfono válido.',
    passwordPlaceholder: 'Contraseña',
    passwordError: 'Tu contraseña debe tener entre 4 y 60 caracteres.',
    signInButtonLogin: 'Iniciar Sesión',
    orSeparator: 'O',
    useCodeButton: 'Usar un código de inicio de sesión',
    forgotPassword: '¿Olvidaste tu contraseña?',
    rememberMe: 'Recuérdame',
    firstTimeNetflix: '¿Primera vez en Netflix?',
    signUpNow: 'Suscríbete ahora.',
    recaptchaInfo: 'Esta página está protegida por Google reCAPTCHA para asegurar que no eres un robot.',
    learnMore: 'Más información.',
    footerQuestions: '¿Preguntas? Contáctanos.',
    footerLink1: 'Preguntas frecuentes',
    footerLink2: 'Preferencias de cookies',
    footerLink3: 'Centro de ayuda',
    footerLink4: 'Información corporativa',
    footerLink5: 'Términos de uso',
    footerLink6: 'Preferencias de anuncios',
    footerLink7: 'Privacidad',
    alertEmailEmpty: 'Por favor, introduce tu correo electrónico o número de teléfono.',
    alertPasswordEmpty: 'Por favor, introduce tu contraseña.',
  }
};

// Funzione di traduzione dinamica (generica, riutilizzata)
function traduzirPara(lang) {
  const t = translations[lang];
  if (!t) {
    console.warn(`Traduzione non trovata per: ${lang}`);
    return;
  }

  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (t[key] !== undefined) {
      element.innerText = t[key];
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (element.tagName === 'INPUT' && element.hasAttribute('placeholder') && t[key] !== undefined) {
      element.placeholder = t[key];
    }
  });

  // Handle document title
  const titleElement = document.querySelector('title');
  if (titleElement && t.documentTitle) {
      titleElement.innerText = t.documentTitle;
  }
}

// Validazione form di login e applicazione traduzione al caricamento
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const signInButton = document.querySelector('.btn-red'); // The main sign-in button

    function validateEmailLogin() {
        const email = emailInput.value.trim();
        const currentLang = localStorage.getItem('selectedLanguage') || 'Italiano'; // Get current lang from local storage
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/^\d+$/.test(email)) { // Allows email or digits for phone
            emailError.innerText = translations[currentLang].emailError;
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function validatePasswordLogin() {
        const password = passwordInput.value;
        const currentLang = localStorage.getItem('selectedLanguage') || 'Italiano'; // Get current lang from local storage
        if (password.length < 4 || password.length > 60) {
            passwordError.innerText = translations[currentLang].passwordError;
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }

    // Add event listeners for blur (when input loses focus)
    if (emailInput) {
        emailInput.addEventListener('blur', validateEmailLogin);
        emailInput.addEventListener('input', () => { // Hide error while typing
            if (emailError.style.display === 'block') {
                emailError.style.display = 'none';
            }
        });
    }
    if (passwordInput) {
        passwordInput.addEventListener('blur', validatePasswordLogin);
        passwordInput.addEventListener('input', () => { // Hide error while typing
            if (passwordError.style.display === 'block') {
                passwordError.style.display = 'none';
            }
        });
    }

    if (signInButton) {
        signInButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission

            const isEmailValid = validateEmailLogin();
            const isPasswordValid = validatePasswordLogin();

            if (isEmailValid && isPasswordValid) {
                // If both are valid, proceed with login (e.g., submit form or AJAX)
                alert("Login successful! (This is a placeholder action)"); // Replace with actual login logic
            } else {
                // Display alerts for empty fields if they were not validated on blur
                const currentLang = localStorage.getItem('selectedLanguage') || 'Italiano';
                if (!emailInput.value.trim()) {
                    alert(translations[currentLang].alertEmailEmpty);
                } else if (!passwordInput.value) {
                    alert(translations[currentLang].alertPasswordEmpty);
                }
            }
        });
    }

    // Traduzione iniziale al caricamento della pagina basata sulla lingua memorizzata
    const storedLang = localStorage.getItem('selectedLanguage');
    if (storedLang) {
        traduzirPara(storedLang);
    } else {
        traduzirPara('Italiano'); // Default language if none is stored
    }
});