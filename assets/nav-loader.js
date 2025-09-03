
(async function(){
  const head = await fetch('/theme/components/header.html').then(r=>r.text()).catch(()=>''),
        foot = await fetch('/theme/components/footer.html').then(r=>r.text()).catch(()=>''),
        sh = document.getElementById('site-header'), sf = document.getElementById('site-footer');
  if (sh) sh.innerHTML = head; if (sf) sf.innerHTML = foot;
  const here = location.pathname.replace(/index\.html$/,'').replace(/\/$/,'') || '/';
  document.querySelectorAll('nav a').forEach(a=>{
    const href = a.getAttribute('href').replace(/index\.html$/,'').replace(/\/$/,'');
    if (href === here) a.classList.add('active');
  });
})();
