document.addEventListener('DOMContentLoaded', function () {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Highlight the matching navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }

        // Add click event listener to load content via AJAX
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const url = link.getAttribute('href');

            // Fetch the new page content
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    // Parse the HTML and extract the main content
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const newContent = doc.querySelector('main').innerHTML;

                    // Update the main content area
                    document.querySelector('main').innerHTML = newContent;

                    // Update the URL without reloading the page
                    history.pushState(null, '', url);

                    // Highlight the new active link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    link.classList.add('active');
                })
                .catch(error => console.error('Error loading page:', error));
        });
    });

    // Handle back/forward navigation
    window.addEventListener('popstate', function () {
        const url = window.location.pathname;

        // Fetch the new page content
        fetch(url)
            .then(response => response.text())
            .then(html => {
                // Parse the HTML and extract the main content
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('main').innerHTML;

                // Update the main content area
                document.querySelector('main').innerHTML = newContent;

                // Highlight the new active link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === url) {
                        link.classList.add('active');
                    }
                });
            })
            .catch(error => console.error('Error loading page:', error));
    });
});