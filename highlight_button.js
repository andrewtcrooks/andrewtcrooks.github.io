document.addEventListener('DOMContentLoaded', function () {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Highlight the matching navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }

        // Add click event listener to store scroll position and load content via AJAX
        link.addEventListener('click', function (event) {
            if (link.classList.contains('active')) {
                event.preventDefault(); // Prevent default action for the active link
                return;
            }

            sessionStorage.setItem('scrollPosition', window.scrollY);
            event.preventDefault(); // Prevent default link behavior
            const url = link.getAttribute('href');

            // Fetch the new page content
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    // Parse the HTML and extract the main content
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const newContent = doc.querySelector('main');

                    if (newContent) {
                        // Update the main content area
                        document.querySelector('main').innerHTML = newContent.innerHTML;

                        // Update the URL without reloading the page
                        history.pushState(null, '', url);

                        // Highlight the new active link
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                        });
                        link.classList.add('active');

                        // Restore scroll position after content update
                        const scrollPosition = sessionStorage.getItem('scrollPosition');
                        if (scrollPosition !== null) {
                            window.scrollTo(0, parseInt(scrollPosition, 10));
                            sessionStorage.removeItem('scrollPosition'); // Clear the stored position
                        }
                    } else {
                        console.error('Error: Main content not found in the fetched HTML.');
                    }
                })
                .catch(error => console.error('Error loading page:', error));
        });
    });

    // Handle back/forward navigation
    window.addEventListener('popstate', function () {
        const url = window.location.pathname;

        // Fetch the new page content
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                // Parse the HTML and extract the main content
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('main');

                if (newContent) {
                    // Update the main content area
                    document.querySelector('main').innerHTML = newContent.innerHTML;

                    // Highlight the new active link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === url) {
                            link.classList.add('active');
                        }
                    });

                    // Restore scroll position after content update
                    const scrollPosition = sessionStorage.getItem('scrollPosition');
                    if (scrollPosition !== null) {
                        window.scrollTo(0, parseInt(scrollPosition, 10));
                        sessionStorage.removeItem('scrollPosition'); // Clear the stored position
                    }
                } else {
                    console.error('Error: Main content not found in the fetched HTML.');
                }
            })
            .catch(error => console.error('Error loading page:', error));
    });
});
