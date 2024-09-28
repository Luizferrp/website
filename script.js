window.addEventListener('scroll', () => {
  const message = document.getElementById('message');
  const posts = document.getElementById('posts');
  if (window.scrollY < 48) {
    message.textContent = 'Olá';
  } 
  if (window.scrollY > 48 && window.scrollY < 144){
    message.textContent = 'Mundo';
  }
  if (window.scrollY > 144) {
    console.log("puts")
    posts.style.visibility = 'visible';
    message.remove();
  }
});

