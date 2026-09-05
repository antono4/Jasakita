/* ===== nav scroll ===== */
(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 24) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}());

/* ===== mobile nav ===== */
(function () {
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  var links = navLinks.querySelectorAll('a');
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}());

/* ===== marquee duplicate ===== */
(function () {
  var track = document.getElementById('marqueeTrack');
  if (!track) return;
  track.innerHTML += track.innerHTML;
}());

/* ===== reveal on scroll ===== */
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px' });
  items.forEach(function (el) { io.observe(el); });
}());

/* ===== progress bars ===== */
(function () {
  var bars = document.querySelectorAll('.exp__bar');
  if (!bars.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      var w = Number(el.getAttribute('data-w')) || 0;
      el.style.width = w + '%';
      io.unobserve(el);
    });
  }, { threshold: 0.3 });
  bars.forEach(function (el) { io.observe(el); });
}());

/* ===== form submit ===== */
(function () {
  var form = document.getElementById('contactForm');
  var toast = document.getElementById('toast');
  if (!form || !toast) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nama = form.nama.value.trim();
    var email = form.email.value.trim();
    var pesan = form.pesan.value.trim();
    if (nama.length === 0 || email.length === 0 || pesan.length === 0) {
      toast.textContent = '⚠ Harap lengkapi nama, email, dan pesan Anda.';
    } else {
      toast.textContent = '✓ Terima kasih! Pesan Anda telah terkirim.';
      form.reset();
    }
    toast.classList.add('show');
    window.clearTimeout(form._timer);
    form._timer = window.setTimeout(function () {
      toast.classList.remove('show');
    }, 3600);
  });
}());
