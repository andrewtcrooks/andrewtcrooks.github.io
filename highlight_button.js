document.addEventListener('DOMContentLoaded', function () {
    // Get the current URL path
    const currentPath = window.location.pathname;
    
    // Highlight the matching navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
