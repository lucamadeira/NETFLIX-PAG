// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function() {
    const answer = item.querySelector('.faq-answer');
    if (answer) {
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    }
  });
});

// Dropdown de idioma
function toggleDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function selectLanguage(language) {
  document.querySelector('.lang-text').innerText = language;
  document.getElementById('lang-dropdown').style.display = 'none';
}

// Fechar dropdown se clicar fora
window.addEventListener('click', function (e) {
  const wrapper = document.querySelector('.language-wrapper');
  if (!wrapper.contains(e.target)) {
    document.getElementById('lang-dropdown').style.display = 'none';
  }
});

// Ativar/desativar borda do botão de idioma
const btn = document.querySelector('.language-button');
document.addEventListener('click', function(e) {
  if (!btn.contains(e.target)) {
    btn.classList.remove('active');
  }
});
btn.addEventListener('click', function(e) {
  e.stopPropagation();
  btn.classList.toggle('active');
});

// MODAIS TOP 10
document.querySelectorAll('.flex-img img').forEach(img => {
  img.addEventListener('click', function() {
    const modalId = 'myModal' + this.id.replace('openModal', '');
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
  });
});

document.querySelectorAll('.close-button').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});