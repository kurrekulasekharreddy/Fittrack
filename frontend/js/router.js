export function navigateTo(view){
  const main = document.getElementById('mainView');
  // lazy load simple view templates
  fetch(`views/${view}.html`).then(r=>{
    if(!r.ok) return main.innerHTML = '<p class="card">View not found</p>';
    return r.text();
  }).then(html=>{
    main.innerHTML = html;
    // trigger custom event that UI module listens to
    window.dispatchEvent(new CustomEvent('view:changed', {detail:{view}}));
  }).catch(err=>{
    main.innerHTML = '<p class="card">Error loading view</p>';
  });
}
