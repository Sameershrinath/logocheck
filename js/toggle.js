	document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        // Toggle the visibility of the dropdown menu
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Close the dropdown when a link is clicked
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    } else {
        console.error("Menu toggle button or navigation element is missing in the DOM.");
    }
});
