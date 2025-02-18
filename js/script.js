// Declare the loadPage function globally so it's accessible to the inline onclick events
function loadPage(page) {
    const contentContainer = document.getElementById("content-container");
    

    // Clear previous content
    contentContainer.innerHTML = "";

    // Load the appropriate content based on the page selected
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            contentContainer.innerHTML = `<p>Error loading content: ${error}</p>`;
        });
}

document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle (Hamburger icon) functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the mobile navigation menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Load home page content by default when the page loads
    loadPage('home');
});
