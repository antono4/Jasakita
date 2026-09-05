/* custom cursor */
(function () {
  var dot = document.getElementById('cursorDot');
  var ring = document.getElementById('cursorRing');
  if (!window.matchMedia('(pointer: fine)').matches) return;
  var x = window.innerWidth / 2;
  var y = window.innerHeight / 2;
  var rx = x;
  var ry = y;
  window.addEventListener('mousemove', function (e) {
    x = e.clientX;
    y = e.clientY;
  });
  (function loop() {
    dot.style.transform = 'translate(' + x + 'px,' + y + 'px) translate(-50%, -50%)';
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%, -50%)';
    window.requestAnimationFrame(loop);
  }());
  var hotTargets = document.querySelectorAll('a, button, input, select, textarea, .svc, .stack-item, .quote');
  hotTargets.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      dot.classList.add('is-hot');
      ring.classList.add('is-hot');
    });
    el.addEventListener('mouseleave', function () {
      dot.classList.remove('is-hot');
      ring.classList.remove('is-hot');
    });
  });
}());

/* nav scroll */
(function () {
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 24) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  }, { passive: true });
}());

/* mobile nav */
(function () {
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    var spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = isOpen ? 'translateY(7px) rotate(45deg)' : '';
    spans[1].style.opacity = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'translateY(-7px) rotate(-45deg)' : '';
  });
  var links = navLinks.querySelectorAll('a');
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      var spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}());

/* marquee duplicate */
(function () {
  var track = document.getElementById('marqueeTrack');
  track.innerHTML += track.innerHTML;
}());

/* reveal on scroll */
(function () {
  var items = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { threshold:  0.15, rootMargin: '0px 0px -40px' });
  items.forEach(function (el) { io.observe(el); });
}());

/* counter */
(function () {
  var els = document.querySelectorAll('[data-count]');
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      var finish = Number(el.getAttribute('data-count'));
      var start = performance.now();
      function step(now) {
        var p = Math.min((now - start) / 1600, 1);
        var eased =1 - Math.pow(1 - p,  3);
        el.textContent = Math.round(finish * eased);
        if (p < 1) { window.requestAnimationFrame(step); }
      }
      step(performance.now());
      cio.unobserve(el);
    });
  }, { threshold:  0.6 });
  els.forEach(function (el) { cio.observe(el); });
}());

/* form submit */
(function () {
  var form = document.getElementById('contactForm');
  var toast = document.getElementById('toast');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nama = form.nama.value.trim();
    var email = form.email.value.trim();
    var pesan = form.pesan.value.trim();
    if (nama.length === 0 || email.length ===  0 || pesan.length === 0) {
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
