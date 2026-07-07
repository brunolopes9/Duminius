/* ============================================================
   DUMINIUS — Interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Header scroll state ---- */
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    const close = () => { toggle.classList.remove('open'); menu.classList.remove('open'); document.body.style.overflow = ''; };
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      menu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  /* ---- Reveal on scroll ---- */
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* ---- Testimonials slider ---- */
  const slider = document.querySelector('[data-slider]');
  if (slider) {
    const track = slider.querySelector('.tst-track');
    const slides = Array.from(slider.querySelectorAll('.tst-slide'));
    const dotsWrap = slider.querySelector('.tst-dots');
    let i = 0, timer = null;

    const dots = slides.map((_, idx) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', 'Testemunho ' + (idx + 1));
      b.addEventListener('click', () => { go(idx); reset(); });
      dotsWrap.appendChild(b);
      return b;
    });

    function go(n) {
      i = (n + slides.length) % slides.length;
      track.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
      // pause any playing video when leaving
      slides.forEach((s, k) => { if (k !== i) { const v = s.querySelector('video'); if (v) { v.pause(); } } });
    }
    function next() { go(i + 1); }
    function prev() { go(i - 1); }
    function reset() { if (timer) clearInterval(timer); timer = setInterval(next, 7000); }

    slider.querySelector('[data-next]').addEventListener('click', () => { next(); reset(); });
    slider.querySelector('[data-prev]').addEventListener('click', () => { prev(); reset(); });
    go(0); reset();
    slider.addEventListener('mouseenter', () => timer && clearInterval(timer));
    slider.addEventListener('mouseleave', reset);
  }

  /* ---- Video play buttons ---- */
  document.querySelectorAll('.tst-video').forEach(box => {
    const video = box.querySelector('video');
    const ph = box.querySelector('.ph');
    if (!video || !ph) return;
    ph.addEventListener('click', () => {
      ph.style.display = 'none';
      video.setAttribute('controls', '');
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    });
    video.addEventListener('pause', () => {
      if (video.currentTime === 0 || video.ended) { ph.style.display = 'grid'; }
    });
  });

  /* ---- Forms (front-end demo handling) ---- */
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const ok = form.querySelector('.form-success');
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = 'A enviar…'; }
      setTimeout(() => {
        form.reset();
        if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label; }
        if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }, 900);
    });
  });

  /* ---- Footer year ---- */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
