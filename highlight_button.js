// Nav highlighting. Never intercepts clicks: page links, anchor links (/#contact)
// and tel: links all behave natively.
//   - A link to a page is highlighted on that page.
//   - A link to a section is highlighted while that section is at the top of the
//     viewport, on the page that holds the section.
document.addEventListener('DOMContentLoaded', function () {
    // GitHub Pages also serves /page.html as /page, and / as /index.html.
    function norm(path) {
        return path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    }

    var here = norm(window.location.pathname);
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
    var pageLink = null;
    var byHash = {};
    links.forEach(function (link) {
        var href = link.getAttribute('href') || '';
        var i = href.indexOf('#');
        if (i === -1) {
            if (norm(href) === here) pageLink = link;
        } else if (i === 0 || norm(href.slice(0, i)) === here) {
            byHash[href.slice(i + 1)] = link;
        }
    });
    if (pageLink) pageLink.classList.add('active');

    var ids = Object.keys(byHash);
    var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    if (!sections.length) return;

    // Highlight the section nearest the top of the viewport (below the sticky header).
    var ticking = false;
    function update() {
        ticking = false;
        var offset = 130;
        var current = null;
        sections.forEach(function (s) {
            if (s.getBoundingClientRect().top - offset <= 0) current = s.id;
        });
        // A short last section can't reach the top: the end of the page counts as that section.
        var doc = document.documentElement;
        if (window.scrollY > 0 && window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
            current = sections[sections.length - 1].id;
        }
        ids.forEach(function (k) { byHash[k].classList.toggle('active', k === current); });
        // One highlight at a time: the page link gives way while a section link is lit.
        if (pageLink) pageLink.classList.toggle('active', !current);
    }
    window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('hashchange', update);
    update();
});
