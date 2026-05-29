// Minimal progressive enhancement. All content is static HTML so it
// remains fully visible to crawlers (incl. AdSense) without JavaScript.
(function () {
  var btn = document.getElementById('menuBtn');
  var links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
