// 1. The main function that toggles your sidebar classes
function toggleSidebar() {
    const sideNavbar = document.getElementById('side-navbar');
    const backgroundOverlay = document.getElementById('overlay');
    
    if (sideNavbar) sideNavbar.classList.toggle('active');
    if (backgroundOverlay) backgroundOverlay.classList.toggle('active');
}

// 2. Wait for the HTML elements to load, then attach the button clicks
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.nav-btn-menu');
    const closeButton = document.querySelector('.closeBtn');
    const backgroundOverlay = document.getElementById('overlay');

    // Make the hamburger menu icon open/close the sidebar
    if (menuButton) {
        menuButton.addEventListener('click', toggleSidebar);
    }

    // Make the close '✕' button close the sidebar
    if (closeButton) {
        closeButton.addEventListener('click', toggleSidebar);
    }

    // Make clicking on the dark background overlay close the sidebar
    if (backgroundOverlay) {
        backgroundOverlay.addEventListener('click', toggleSidebar);
    }
});