window.addEventListener('scroll', () => {
  const message = document.getElementById('message');
  if (window.scrollY > 0) {
    message.textContent = 'Mundo';
  } else {
    message.textContent = 'Olá';
  }
});

