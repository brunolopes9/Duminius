/* ============================================================
   DUMINIUS — Interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Chrome partilhado (barra de topo / navbar / rodapé) ---- */
  (function chrome() {
    var path = (location.pathname.split('/').pop() || 'index.html');
    if (path === '' ) path = 'index.html';
    if (path === 'area-reservada.html') return; /* página de login tem layout próprio */
    var svg = {
      fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
      ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
      in: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4z"/></svg>',
      se: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
      ph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>',
      ma: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
      cl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
      pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
    };
    var items = [['index.html','Início'],['formacao-12-ano.html','12.º Ano'],['inscricoes.html','Inscrições'],['calendario.html','Calendário'],['empresas.html','Empresas'],['blog.html','Blog'],['sobre.html','Sobre Nós']];
    var isBlog = /^blog/.test(path);
    function links(cls) {
      return items.map(function (i) {
        var on = (path === i[0]) || (i[0] === 'blog.html' && isBlog);
        return '<a href="' + i[0] + '"' + (on ? ' class="active"' : '') + '>' + i[1] + '</a>';
      }).join(cls === 'm' ? '' : '\n      ');
    }

    var topbar =
      '<div class="topbar"><div class="wrap">' +
        '<div class="tb-left">' +
          '<a href="tel:+351961303278">' + svg.ph + ' +351 961 303 278</a>' +
          '<a href="mailto:formacao@duminius.com">' + svg.ma + ' formacao@duminius.com</a>' +
          '<span>' + svg.cl + ' Seg–Sex 9h–19h · Sáb 9h–12h30</span>' +
        '</div>' +
        '<div class="tb-right">' +
          '<a href="area-reservada.html">Área Reservada</a>' +
          '<a href="#" class="tb-moodle">Moodle</a>' +
          '<a href="#" target="_blank" rel="noopener" aria-label="Facebook">' + svg.fb + '</a>' +
          '<a href="https://www.instagram.com/duminius_com/" target="_blank" rel="noopener" aria-label="Instagram">' + svg.ig + '</a>' +
          '<a href="#" target="_blank" rel="noopener" aria-label="LinkedIn">' + svg.in + '</a>' +
        '</div>' +
      '</div></div>';

    var head =
      '<header class="site-header"><div class="wrap nav">' +
        '<div class="brand-group"><a href="index.html" class="brand" aria-label="Duminius — início">duminius</a>' +
        '<span class="nav-divider"></span>' +
        '<img class="dgert-badge" src="assets/img/cert/dgert.png" alt="Entidade Formadora Certificada DGERT" /></div>' +
        '<nav class="nav-links" aria-label="Principal">' + links() + '</nav>' +
        '<div class="nav-cta"><a href="contactos.html" class="btn btn-primary">Contacte-nos</a>' +
        '<button class="nav-toggle" aria-label="Abrir menu"><span></span><span></span><span></span></button></div>' +
      '</div></header>';

    var mobile =
      '<div class="mobile-menu">' + links('m') +
        '<a href="formadores.html">Formadores</a>' +
        '<a href="contactos.html">Contactos</a>' +
        '<a href="area-reservada.html">Área Reservada</a>' +
        '<a href="#">Moodle</a>' +
        '<a href="contactos.html" class="btn btn-primary btn-block" style="margin-top:16px">Contacte-nos</a>' +
      '</div>';

    var maps = 'https://www.google.com/maps/search/?api=1&query=Rua+dos+Bombeiros+Volunt%C3%A1rios+6+3560-170+S%C3%A1t%C3%A3o';
    var footer =
      '<footer class="site-footer"><div class="wrap">' +
        '<div class="foot-grid">' +
          '<div class="foot-brand"><a href="index.html" class="foot-logo" aria-label="Duminius"><img src="assets/img/duminius-logo-trans.png" alt="Duminius" /></a>' +
            '<p>Onde o conhecimento cria oportunidades. Qualificar pessoas é construir o futuro.</p>' +
            '<div class="socials"><a href="#" aria-label="Facebook">' + svg.fb + '</a>' +
            '<a href="https://www.instagram.com/duminius_com/" target="_blank" rel="noopener" aria-label="Instagram">' + svg.ig + '</a>' +
            '<a href="#" aria-label="LinkedIn">' + svg.in + '</a></div></div>' +
          '<div class="foot-col"><h5>Formação</h5><a href="formacao-12-ano.html">12.º Ano</a><a href="inscricoes.html">Inscrições Abertas</a><a href="empresas.html">Para Empresas</a><a href="formadores.html">Bolsa de Formadores</a></div>' +
          '<div class="foot-col"><h5>Duminius</h5><a href="sobre.html">Sobre nós</a><a href="blog.html">Blog</a><a href="contactos.html">Contactos</a><a href="area-reservada.html">Área Reservada</a><a href="#">Moodle</a></div>' +
          '<div class="foot-col"><h5>Contactos</h5><ul class="foot-contact">' +
            '<li><a href="' + maps + '" target="_blank" rel="noopener">' + svg.pin + ' Rua dos Bombeiros Voluntários, n.º 6, 3560-170 Sátão</a></li>' +
            '<li><a href="tel:+351961303278">' + svg.ph + ' <span>+351 961 303 278<br><small style="opacity:.6;font-size:.82em">Chamada para a rede móvel nacional</small></span></a></li>' +
            '<li><a href="mailto:formacao@duminius.com">' + svg.ma + ' formacao@duminius.com</a></li>' +
            '<li><span class="fc-static">' + svg.cl + ' Seg–Sex 9h–19h · Sáb 9h–12h30</span></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="foot-mid">' +
          '<div class="foot-seals">' +
            '<img src="assets/img/pme-lider.png" alt="PME Líder · PME Excelência · Programa Qualifica" loading="lazy" />' +
            '<a href="https://www.livroreclamacoes.pt/inicio" target="_blank" rel="noopener" aria-label="Livro de Reclamações Eletrónico"><img class="seal-livro" src="assets/img/livro-reclamacoes.png" alt="Livro de Reclamações Eletrónico" loading="lazy" /></a>' +
            '<img class="seal-dgert" src="assets/img/cert/dgert-white.png" alt="Entidade Formadora Certificada DGERT" loading="lazy" />' +
          '</div>' +
          '<div class="foot-legal"><a href="https://www.livroreclamacoes.pt/inicio" target="_blank" rel="noopener">Livro de Reclamações</a><a href="politica-privacidade.html">Privacidade</a><a href="politica-cookies.html">Cookies</a><a href="termos.html">Termos</a></div>' +
        '</div>' +
        '<div class="foot-copy">© <span data-year>2026</span> Duminius — Formação &amp; Desenvolvimento · NIF 513 614 095 · Todos os direitos reservados · Desenvolvido por <a href="https://lopestech.pt" target="_blank" rel="noopener">lopestech</a></div>' +
      '</div></footer>';

    function swap(sel, html, pos) {
      var el = document.querySelector(sel);
      if (el) { el.outerHTML = html; }
      else if (pos === 'end') { document.body.insertAdjacentHTML('beforeend', html); }
      else { document.body.insertAdjacentHTML('afterbegin', html); }
    }
    /* substituir de baixo para cima para não perder referências */
    swap('.site-footer', footer, 'end');
    var mm = document.querySelector('.mobile-menu'); if (mm) mm.outerHTML = mobile;
    swap('.site-header', head);
    swap('.topbar', topbar);
  })();

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
      try { video.currentTime = 0; } catch (e) {}
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    });
    video.addEventListener('pause', () => {
      if (video.currentTime === 0 || video.ended) { ph.style.display = 'grid'; }
    });
  });

  /* ---- Carrossel de formações ---- */
  document.querySelectorAll('[data-fcarousel]').forEach(function (car) {
    var track = car.querySelector('.fcards');
    if (!track) return;
    function step() { var c = track.querySelector('.fcard'); return ((c ? c.offsetWidth : 300) + 22) * 2; }
    var n = car.querySelector('[data-fnext]'), p = car.querySelector('[data-fprev]');
    if (n) n.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    if (p) p.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
  });

  /* ---- Calendário de Formação ---- */
  (function calendar() {
    var cal = document.getElementById('calendar');
    if (!cal) return;
    var list = document.getElementById('cal-events');
    var listHead = document.getElementById('cal-events-head');
    /* Eventos — o dono pode editar/adicionar aqui (data AAAA-MM-DD) */
    var events = [
      { d: '2026-07-16', t: 'Sessão de esclarecimento — Conclusão do 12.º Ano', c: '12.º Ano' },
      { d: '2026-07-21', t: 'Início de turma — 12.º Ano (pós-laboral)', c: '12.º Ano' },
      { d: '2026-07-24', t: 'Workshop: Voltar a estudar em adulto', c: 'Workshop' },
      { d: '2026-07-30', t: 'Sessão sobre apoios financeiros (até 400€/mês)', c: 'Apoios' },
      { d: '2026-08-05', t: 'Open Day — Visita ao espaço no Sátão', c: 'Evento' },
      { d: '2026-08-18', t: 'Sessão de esclarecimento — Cursos profissionais', c: 'Formação' },
      { d: '2026-09-01', t: 'Arranque do novo ano formativo', c: '12.º Ano' }
    ];
    var months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    var wds = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    var moShort = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
    var green = function (c) { return ['Workshop', 'Apoios', 'Evento'].indexOf(c) >= 0; };
    var now = new Date();
    var view = new Date(now.getFullYear(), now.getMonth(), 1);
    /* Subscrever / exportar */
    var feed = 'https://www.duminius.com/calendario.ics';
    var wcal = 'webcal://www.duminius.com/calendario.ics';
    var subs = [
      ['Calendário Google', 'https://calendar.google.com/calendar/render?cid=' + encodeURIComponent(wcal), 1],
      ['iCalendar', wcal, 1],
      ['Outlook 365', 'https://outlook.office.com/calendar/0/addfromweb?url=' + encodeURIComponent(feed) + '&name=Duminius', 1],
      ['Outlook Live', 'https://outlook.live.com/calendar/0/addfromweb?url=' + encodeURIComponent(feed) + '&name=Duminius', 1],
      ['Exportar ficheiro .ics', 'calendario.ics', 0],
      ['Exportar para ficheiro Outlook .ics', 'calendario.ics', 0]
    ];
    var subMenu = subs.map(function (s) { return '<a href="' + s[1] + '"' + (s[2] ? ' target="_blank" rel="noopener"' : ' download') + '>' + s[0] + '</a>'; }).join('');

    function evOn(ds) { return events.filter(function (e) { return e.d === ds; }); }

    function openEvent(e) {
      var p = e.d.split('-');
      var dstr = (+p[2]) + ' de ' + months[+p[1] - 1] + ' de ' + p[0];
      var ov = document.createElement('div');
      ov.className = 'cal-modal';
      ov.innerHTML = '<div class="cal-modal-box"><button class="cal-modal-x" aria-label="Fechar">&times;</button>' +
        '<span class="cal-modal-cat ' + (green(e.c) ? 'g' : '') + '">' + esc(e.c) + '</span>' +
        '<h3>' + esc(e.t) + '</h3>' +
        '<p class="cal-modal-line">📅 ' + dstr + '</p>' +
        '<p class="cal-modal-line">📍 Rua dos Bombeiros Voluntários, n.º 6, Sátão</p>' +
        '<p style="color:var(--muted);font-size:.92rem;margin-top:8px">Sessão gratuita e sem compromisso. Reserve o seu lugar.</p>' +
        '<a href="contactos.html" class="btn btn-primary btn-block" style="margin-top:16px">Reservar lugar</a></div>';
      function close() { ov.remove(); }
      ov.addEventListener('click', function (ev) { if (ev.target === ov) close(); });
      ov.querySelector('.cal-modal-x').onclick = close;
      document.body.appendChild(ov);
    }

    var mode = 'grid', pickYear = 0, clickData = [];
    var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };

    function head(y, m) {
      return '<div class="cal-head"><div class="cal-head-l">' +
        '<div class="cal-nav"><button data-prev aria-label="Mês anterior">‹</button><button data-next aria-label="Mês seguinte">›</button></div>' +
        '<button class="cal-today" data-today>Este mês</button>' +
        '<div class="cal-month"><button class="cal-month-btn" data-month>' + cap(months[m]) + ' ' + y + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="cal-month-menu" hidden></div></div>' +
        '</div>' +
        '<div class="cal-actions">' +
          '<div class="cal-views"><button data-view="grid"' + (mode === 'grid' ? ' class="on"' : '') + '>Mês</button><button data-view="list"' + (mode === 'list' ? ' class="on"' : '') + '>Lista</button></div>' +
          '<div class="cal-sub"><button class="cal-sub-btn" data-sub aria-haspopup="true">Subscrever <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="cal-sub-menu" hidden>' + subMenu + '</div></div>' +
        '</div></div>';
    }

    function grid(y, m) {
      var off = (new Date(y, m, 1).getDay() + 6) % 7, dim = new Date(y, m + 1, 0).getDate(), prevDim = new Date(y, m, 0).getDate(), total = Math.ceil((off + dim) / 7) * 7;
      var h = '<div class="cal-grid">';
      wds.forEach(function (w) { h += '<div class="wd">' + w + '</div>'; });
      for (var i = 0; i < total; i++) {
        var dayNum, cls = 'cal-cell', evs = [];
        if (i < off) { dayNum = prevDim - off + 1 + i; cls += ' out'; }
        else if (i >= off + dim) { dayNum = i - off - dim + 1; cls += ' out'; }
        else { dayNum = i - off + 1; evs = evOn(y + '-' + pad(m + 1) + '-' + pad(dayNum)); if (y === now.getFullYear() && m === now.getMonth() && dayNum === now.getDate()) cls += ' today'; }
        var blocks = evs.map(function (e) { var idx = clickData.push(e) - 1; return '<button class="cal-ev-block' + (green(e.c) ? ' g' : '') + '" data-ev="' + idx + '" title="' + esc(e.t) + '">' + esc(e.t) + '</button>'; }).join('');
        h += '<div class="' + cls + '"><span class="dnum">' + dayNum + '</span>' + blocks + '</div>';
      }
      return h + '</div>';
    }

    function listView() {
      var t0 = new Date(); t0.setHours(0, 0, 0, 0);
      var up = events.filter(function (e) { return new Date(e.d + 'T00:00:00') >= t0; }).sort(function (a, b) { return a.d < b.d ? -1 : 1; });
      if (!up.length) up = events.slice().sort(function (a, b) { return a.d < b.d ? -1 : 1; });
      if (!up.length) return '<div class="cal-listview"><p style="color:var(--muted)">Sem eventos agendados.</p></div>';
      return '<div class="cal-listview">' + up.map(function (e) {
        var idx = clickData.push(e) - 1, p = e.d.split('-');
        return '<button class="cal-ev" data-ev="' + idx + '"><div class="cal-date"><b>' + (+p[2]) + '</b><span>' + moShort[+p[1] - 1] + '</span></div><div class="cal-info"><h4>' + esc(e.t) + '</h4><span class="' + (green(e.c) ? 'g' : '') + '">' + esc(e.c) + '</span></div><svg class="cal-ev-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>';
      }).join('') + '</div>';
    }

    function monthMenu(yr) {
      var h = '<div class="cmm-head"><button data-yprev aria-label="Ano anterior">‹</button><b>' + yr + '</b><button data-ynext aria-label="Ano seguinte">›</button></div><div class="cmm-grid">';
      for (var i = 0; i < 12; i++) h += '<button data-pm="' + i + '"' + ((yr === view.getFullYear() && i === view.getMonth()) ? ' class="on"' : '') + '>' + cap(moShort[i].toLowerCase()) + '</button>';
      return h + '</div>';
    }

    function render() {
      var y = view.getFullYear(), m = view.getMonth();
      clickData = [];
      cal.innerHTML = head(y, m) + (mode === 'list' ? listView() : grid(y, m));
      cal.querySelector('[data-prev]').onclick = function () { view.setMonth(view.getMonth() - 1); render(); };
      cal.querySelector('[data-next]').onclick = function () { view.setMonth(view.getMonth() + 1); render(); };
      cal.querySelector('[data-today]').onclick = function () { view = new Date(now.getFullYear(), now.getMonth(), 1); render(); };
      cal.querySelectorAll('[data-view]').forEach(function (b) { b.onclick = function () { mode = b.getAttribute('data-view'); render(); }; });
      var subBtn = cal.querySelector('[data-sub]'), subMenuEl = cal.querySelector('.cal-sub-menu');
      var mBtn = cal.querySelector('[data-month]'), mMenuEl = cal.querySelector('.cal-month-menu');
      subBtn.onclick = function (e) { e.stopPropagation(); subMenuEl.hidden = !subMenuEl.hidden; mMenuEl.hidden = true; };
      function drawMenu() {
        mMenuEl.innerHTML = monthMenu(pickYear);
        mMenuEl.querySelector('[data-yprev]').onclick = function (e) { e.stopPropagation(); pickYear--; drawMenu(); };
        mMenuEl.querySelector('[data-ynext]').onclick = function (e) { e.stopPropagation(); pickYear++; drawMenu(); };
        mMenuEl.querySelectorAll('[data-pm]').forEach(function (b) { b.onclick = function () { view = new Date(pickYear, +b.getAttribute('data-pm'), 1); render(); }; });
      }
      mBtn.onclick = function (e) { e.stopPropagation(); if (mMenuEl.hidden) { pickYear = y; drawMenu(); } mMenuEl.hidden = !mMenuEl.hidden; subMenuEl.hidden = true; };
      document.addEventListener('click', function () { if (subMenuEl) subMenuEl.hidden = true; if (mMenuEl) mMenuEl.hidden = true; });
      cal.querySelectorAll('[data-ev]').forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); openEvent(clickData[+b.getAttribute('data-ev')]); }; });
    }
    render();
  })();

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

  /* ---- Banner de cookies ---- */
  (function cookies() {
    try { if (localStorage.getItem('duminius-cookies')) return; } catch (e) { return; }
    var bar = document.createElement('div');
    bar.className = 'cookie-banner';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Aviso de cookies');
    bar.innerHTML =
      '<p>Este site utiliza cookies para melhorar a sua experiência de navegação. ' +
      'Consulte a nossa <a href="politica-cookies.html">Política de Cookies</a> e ' +
      '<a href="politica-privacidade.html">Política de Privacidade</a>.</p>' +
      '<div class="cb-actions">' +
      '<button class="btn btn-outline" data-cookie="reject">Rejeitar</button>' +
      '<button class="btn btn-primary" data-cookie="accept">Aceitar</button>' +
      '</div>';
    function close(v) { try { localStorage.setItem('duminius-cookies', v); } catch (e) {} bar.remove(); }
    bar.querySelector('[data-cookie="accept"]').addEventListener('click', function () { close('accept'); });
    bar.querySelector('[data-cookie="reject"]').addEventListener('click', function () { close('reject'); });
    document.body.appendChild(bar);
  })();

  /* ---- Popup Newsletter ---- */
  (function newsletterPopup() {
    try { if (localStorage.getItem('duminius-nl')) return; } catch (e) { return; }
    var ov = document.createElement('div');
    ov.className = 'nl-pop-overlay';
    ov.innerHTML =
      '<div class="nl-pop" role="dialog" aria-label="Subscrever newsletter">' +
        '<button class="nl-pop-close" aria-label="Fechar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
        '<div class="nl-pop-top">' +
          '<div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></div>' +
          '<h3>Não perca nenhuma novidade</h3>' +
          '<p>Subscreva a newsletter e receba novidades, formações e conteúdos exclusivos diretamente no seu e-mail.</p>' +
        '</div>' +
        '<div class="nl-pop-body">' +
          '<form data-form>' +
            '<div class="field"><label for="nlp-nome">Nome</label><input id="nlp-nome" name="nome" type="text" placeholder="O seu nome" required></div>' +
            '<div class="field"><label for="nlp-email">E-mail</label><input id="nlp-email" name="email" type="email" placeholder="o.seu@email.com" required></div>' +
            '<label class="check"><input type="checkbox" required> Aceito a <a href="politica-privacidade.html" target="_blank" rel="noopener">Política de Privacidade</a>.</label>' +
            '<button type="submit" class="btn btn-primary btn-block">Subscrever gratuitamente</button>' +
            '<p class="form-success" hidden style="margin-top:12px;text-align:center;color:var(--green);font-weight:700">✔ Subscrição registada. Obrigado!</p>' +
          '</form>' +
        '</div>' +
      '</div>';
    function open() { document.body.appendChild(ov); requestAnimationFrame(function () { ov.classList.add('show'); }); }
    function dismiss() { try { localStorage.setItem('duminius-nl', '1'); } catch (e) {} ov.classList.remove('show'); setTimeout(function () { ov.remove(); }, 350); }
    ov.querySelector('.nl-pop-close').addEventListener('click', dismiss);
    ov.addEventListener('click', function (e) { if (e.target === ov) dismiss(); });
    ov.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = ov.querySelector('.form-success');
      if (ok) ok.hidden = false;
      ov.querySelector('form').reset();
      setTimeout(dismiss, 1600);
    });
    var opened = false;
    function trigger() { if (opened) return; opened = true; open(); window.removeEventListener('scroll', onScrollTrig); }
    function onScrollTrig() { if (window.scrollY > document.documentElement.clientHeight * 0.6) trigger(); }
    setTimeout(trigger, 15000);
    window.addEventListener('scroll', onScrollTrig, { passive: true });
  })();
})();
