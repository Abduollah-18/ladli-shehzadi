
// create hearts continuously
function makeHeart(){
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = '❤';
  h.style.left = Math.random()*100 + 'vw';
  h.style.fontSize = (Math.random()*20 + 12) + 'px';
  h.style.animationDuration = (Math.random()*3 + 4) + 's';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(), 8000);
}
setInterval(makeHeart, 300);

// teddy behavior: hidden behind header, on scroll come out center, kiss, then hide back
document.addEventListener('DOMContentLoaded', ()=>{
  const teddy = document.getElementById('teddy');
  const lips = document.getElementById('lipsOverlay');
  const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  let busy = false;

  function triggerTeddy(){
    if(busy) return;
    busy = true;
    // bring out
    teddy.classList.add('teddy-out');
    // show kiss overlay shortly after
    setTimeout(()=>{ lips.classList.add('show'); }, 600);
    // remove kiss and send back
    setTimeout(()=>{
      lips.classList.remove('show');
      teddy.classList.remove('teddy-out');
      teddy.classList.add('teddy-hide');
      setTimeout(()=>{ teddy.classList.remove('teddy-hide'); busy=false; }, 600);
    }, 2000);
  }

  // trigger on scroll past a point
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY || window.pageYOffset;
    const trigger = Math.max(300, docH * 0.28);
    if(y > trigger && !busy) triggerTeddy();
  });

  // demo once on load after small delay
  setTimeout(()=>{ triggerTeddy(); }, 800);
});
