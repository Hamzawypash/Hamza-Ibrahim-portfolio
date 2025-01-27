const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]
 
togglebutton.addEventListener('click',() => {
   navbarlinks.classList.toggle('active')
})
const text = document.querySelector('.animated-text');
 
setInterval(() => {
  const colors = ['#FFD301'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  text.style.color = randomColor;
}, 500);
 