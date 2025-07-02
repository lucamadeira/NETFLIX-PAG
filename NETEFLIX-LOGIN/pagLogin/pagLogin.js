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