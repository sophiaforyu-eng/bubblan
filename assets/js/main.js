document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navlinks');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
});


document.querySelectorAll('[data-carousel]').forEach((shell) => {
  const track = shell.querySelector('.carousel-track');
  if (!track) return;
  const prev = shell.querySelector('[data-prev]');
  const next = shell.querySelector('[data-next]');
  const amount = () => Math.max(280, Math.min(track.clientWidth * .82, 520));
  prev?.addEventListener('click', () => track.scrollBy({left:-amount(), behavior:'smooth'}));
  next?.addEventListener('click', () => track.scrollBy({left: amount(), behavior:'smooth'}));
  let down=false,startX=0,startScroll=0,moved=false;
  track.addEventListener('pointerdown',(e)=>{ if(e.pointerType==='touch') return; down=true; moved=false; startX=e.clientX; startScroll=track.scrollLeft; track.classList.add('dragging'); track.setPointerCapture(e.pointerId); });
  track.addEventListener('pointermove',(e)=>{ if(!down) return; const dx=e.clientX-startX; if(Math.abs(dx)>5) moved=true; track.scrollLeft=startScroll-dx; });
  const end=(e)=>{ if(!down) return; down=false; track.classList.remove('dragging'); try{track.releasePointerCapture(e.pointerId)}catch(_){}};
  track.addEventListener('pointerup',end); track.addEventListener('pointercancel',end);
  track.querySelectorAll('a').forEach((a)=>a.addEventListener('click',(e)=>{ if(moved)e.preventDefault(); }));
});
