// navbar.js

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarList = document.querySelector('.navbar-list');

    menuIcon.addEventListener('click', () => {
        navbarList.classList.toggle('active');
        // Toggle the bars and times icon
        const icon = menuIcon.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
