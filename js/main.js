const menuButton = document.getElementById('menu-button');
const mainNav = document.getElementById('main-nav');
const menuLinks = document.getElementsByClassName('main=menu-link');

// When the menu button is clicked the menu is shown
menuButton.addEventListener('click', function() {
    if (mainNav.className != 'show-nav') {
        mainNav.className = 'show-nav';
    } else {
        mainNav.className = 'main-nav';
    }
});

mainNav.addEventListener('click', function() {
    if (mainNav.className != 'show-nav') {
        mainNav.className = 'show-nav';
    } else {
        mainNav.className = 'main-nav';
    }
});

