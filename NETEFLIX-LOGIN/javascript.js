document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function() {
    const answer = item.querySelector('.faq-answer');
    if (answer) {
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    }
  });
});
