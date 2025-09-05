
// hearts
function makeHeart(){const h=document.createElement('div');h.className='heart';h.textContent='❤';h.style.left=Math.random()*100+'vw';h.style.fontSize=(Math.random()*18+12)+'px';h.style.animationDuration=(Math.random()*3+4)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),8000);}setInterval(makeHeart,300);

// teddy behavior: hidden behind header, on scroll come out center, kiss, then hide back
const teddyImg = document.getElementById ? document.getElementById('teddy') : null;
const teddyWrap = document.getElementById ? document.getElementById('teddyWrap') : null;
const lips = document.getElementById ? document.getElementById('lipsOverlay') : null;
let busy=false;
function onScroll(){
  if(!teddyWrap || busy) return;
  const y = window.scrollY || window.pageYOffset;
  const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const trigger = docH * 0.32;
  if(y > 120 && y < docH-200 && !busy){
    busy=true;
    // bring teddy out: add class to img to position center
    // clone image to center for smooth effect
    const img = teddyWrap.querySelector('img');
    img.classList.add('teddy-out');
    // show lips
    lips.classList.add('show');
    setTimeout(()=>{
      lips.classList.remove('show');
      // send back
      img.classList.remove('teddy-out');
      img.classList.add('teddy-hide');
      setTimeout(()=>{ img.classList.remove('teddy-hide'); busy=false; }, 700);
    },1400);
  }
}
// trigger on scroll and also if user clicks a button in future
window.addEventListener('scroll', onScroll);
// also allow demo on load once
window.addEventListener('load', ()=>{
  // slight delay show once
  setTimeout(()=>{
    const img = teddyWrap.querySelector('img');
    img.classList.add('teddy-out');
    lips.classList.add('show');
    setTimeout(()=>{ lips.classList.remove('show'); img.classList.remove('teddy-out'); }, 1400);
  },900);
});
