document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Define a mapping of search queries to destination pages
    const courseMapping = {
        'python': 'python.html',
        'javascript': 'js.html',
        'c': 'c.html',
        'java': 'java.html',
        'c++': 'c++.html',
        'frontend': 'frontend.html',
        'html': 'html.html',
        'css': 'css.html',
        'frontenddevelopment': 'frontend.html',
        'js': 'js.html',
        'py': 'python.html',
        // Add more mappings as needed
    };

    // Check if the search query has a corresponding destination page
    if (courseMapping.hasOwnProperty(searchInput)) {
        const destinationPage = courseMapping[searchInput];
        window.location.href = destinationPage; // Redirect to the destination page
    } else {
        alert('Course not found'); // Show an alert if the course is not found
    }
});
