// Nav highlighting for the single-page site. Never intercepts clicks:
// anchor links (/#pricing), tel: links and normal pages all behave natively.
document.addEventListener('DOMContentLoaded', function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
    var byHash = {};
    links.forEach(function (link) {
        var href = link.getAttribute('href') || '';
        var i = href.indexOf('#');
        if (i !== -1 && href.slice(0, i) === '/' || (i === 0)) {
            byHash[href.slice(i + 1)] = link;
        } else if (href === window.location.pathname) {
            link.classList.add('active');
        }
    });

    var ids = Object.keys(byHash);
    if (!ids.length || window.location.pathname !== '/') return;

    function setActive(id) {
        ids.forEach(function (k) { byHash[k].classList.toggle('active', k === id); });
    }

    // Highlight the section nearest the top of the viewport (below the sticky header).
    var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var ticking = false;
    function update() {
        ticking = false;
        var offset = 130;
        var current = null;
        sections.forEach(function (s) {
            if (s.getBoundingClientRect().top - offset <= 0) current = s.id;
        });
        setActive(current);
    }
    window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('hashchange', update);
    update();
});
