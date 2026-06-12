(function(){
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  // default to light when no preference saved; if a previous value is 'dark', override it
  let initial = saved ? saved : 'light';
  if (saved === 'dark'){
    initial = 'light';
    try{ localStorage.setItem('theme','light'); }catch(e){}
  }
  document.body.classList.toggle('light', initial === 'light');

  function updateIcon(){
    if(!toggle) return;
    toggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
  }

  if(toggle){
    toggle.addEventListener('click', function(){
      const isLight = document.body.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateIcon();
    });
  }

  // ensure icon matches on load
  updateIcon();
})();
