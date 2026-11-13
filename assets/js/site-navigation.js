(function(){
  'use strict';
  const siteNav=document.getElementById('site-universal-nav');
  if(!siteNav)return;
  const sections=[...siteNav.querySelectorAll('.site-nav-section')];
  const buttons=[...siteNav.querySelectorAll('.site-nav-trigger')];
  const closeAll=(except)=>{
    sections.forEach(s=>{
      const open=s===except;
      s.dataset.open=open?'true':'false';
      s.querySelector('.site-nav-trigger').setAttribute('aria-expanded',open?'true':'false');
    });
  };
  buttons.forEach(b=>{
    b.addEventListener('click', e=>{
      e.stopPropagation();
      siteNav.removeAttribute('data-escape');
      const parent=b.closest('.site-nav-section');
      closeAll(parent.dataset.open==='true'?null:parent);
    });
    b.addEventListener('keydown',e=>{
      if(e.key==='ArrowDown'){
        e.preventDefault();closeAll(b.closest('.site-nav-section'));
        const first=b.closest('.site-nav-section').querySelector('.site-dropdown-link');
        if(first)first.focus();
      }
    });
  });
  siteNav.addEventListener('mouseleave',()=>siteNav.removeAttribute('data-escape'));
  document.addEventListener('click',e=>{
    if(!siteNav.contains(e.target))closeAll(null);
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      const expanded=sections.find(s=>s.dataset.open==='true');
      if(expanded){closeAll(null);siteNav.dataset.escape='true';expanded.querySelector('.site-nav-trigger').focus();}
    }
  });
  const updateNavOffset=()=>document.documentElement.style.setProperty('--site-universal-nav-height',siteNav.getBoundingClientRect().height+'px');
  updateNavOffset();
  window.addEventListener('resize',updateNavOffset);
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(updateNavOffset).observe(siteNav);
  document.addEventListener('error',e=>{
    const img=e.target;
    if(img && img.tagName==='IMG' && img.dataset.fallback && img.src!==img.dataset.fallback){
      img.src=img.dataset.fallback;
    }
  },true);
})();
