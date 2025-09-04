
const header = document.querySelector('header');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 50) header.classList.add('small'); else header.classList.remove('small');
});

const teddyPeek = document.getElementById('teddy');
const teddyWrap = document.getElementById('teddyWrap');
const lips = document.getElementById('lipsOverlay');

function makeHeart(){
  const h = document.createElement('div');
  h.className='heart';
  h.textContent = '❤';
  h.style.left = Math.random()*100 + 'vw';
  h.style.fontSize = (Math.random()*18 + 12) + 'px';
  h.style.animationDuration = (Math.random()*3 + 4) + 's';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(), 8000);
}
setInterval(makeHeart, 350);

let lastY = 0;
let kissDone = false;

function followAndBounce(){
  const y = window.scrollY;
  if(y > 120){
    if(!teddyWrap.classList.contains('teddy-follow')){
      teddyWrap.classList.add('teddy-follow');
      teddyWrap.style.top = '90px';
    }
    const travel = Math.min(240, y * 0.25);
    teddyWrap.style.top = (90 + travel) + 'px';
    if(y > lastY + 20){
      teddyPeek.classList.remove('bounce');
      void teddyPeek.offsetWidth;
      teddyPeek.classList.add('bounce');
    }
  }else{
    teddyWrap.classList.remove('teddy-follow');
    teddyWrap.style.top = '';
  }
  lastY = y;

  const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const triggerPoint = docH * 0.35;
  const resetPoint = docH * 0.10;

  if(!kissDone && y > triggerPoint){
    startKiss();
    kissDone = true;
  }
  if(kissDone && y < resetPoint){
    kissDone = false;
  }
}
window.addEventListener('scroll', followAndBounce);

function startKiss(){
  teddyWrap.classList.add('teddy-center');
  lips.classList.add('show');
  setTimeout(()=>{
    lips.classList.remove('show');
    teddyWrap.classList.remove('teddy-center');
  }, 1200);
}
followAndBounce();
