document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    // Dynamically load markdown content based on click
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filePath = this.getAttribute('href');
            loadMarkdown(filePath);
        });
    });
});

// Function to load markdown files dynamically
function loadMarkdown(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = marked(data);
        })
        .catch(error => console.error('Error loading markdown file:', error));
}
