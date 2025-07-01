document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function() {
    const answer = item.querySelector('.faq-answer');
    if (answer) {
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    }
  });
});

function toggleDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function selectLanguage(language) {
  document.querySelector('.lang-text').innerText = language;
  document.getElementById('lang-dropdown').style.display = 'none';

  // Aqui você pode trocar o idioma ou redirecionar
  // Exemplo: window.location.href = `/${language.toLowerCase()}/`;
}

// Fechar dropdown se clicar fora
window.addEventListener('click', function (e) {
  const wrapper = document.querySelector('.language-wrapper');
  if (!wrapper.contains(e.target)) {
    document.getElementById('lang-dropdown').style.display = 'none';
  }
});





