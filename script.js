
const header = document.querySelector('header');
const onScroll = () => {
  if (window.scrollY > 40) header.classList.add('shrink');
  else header.classList.remove('shrink');
};
document.addEventListener('scroll', onScroll);
onScroll();

function createHeart(){
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤️';
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.fontSize = (Math.random()*16 + 14) + 'px';
  heart.style.animationDuration = (Math.random()*3 + 4) + 's';
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(), 7000);
}
setInterval(createHeart, 350);

const lipsOverlay = document.createElement('div');
lipsOverlay.className = 'lips-overlay';
lipsOverlay.innerHTML = '<div class="lips-emoji">💋</div>';
document.body.appendChild(lipsOverlay);

let lastSection = null;
const sections = document.querySelectorAll('section.card');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      if(lastSection && lastSection !== entry.target){
        lipsOverlay.classList.add('show');
        setTimeout(()=> lipsOverlay.classList.remove('show'), 800);
      }
      lastSection = entry.target;
    }
  });
},{ threshold: .6 });

sections.forEach(s => obs.observe(s));
