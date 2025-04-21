document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.scroll-top');

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  if (btn) {
    btn.addEventListener('click', scrollToTop);
  }
});


