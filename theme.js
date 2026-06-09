// Bascule clair / sombre + mémorisation
function toggleTheme() {
  var d = document.documentElement;
  var next = d.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  d.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
}
