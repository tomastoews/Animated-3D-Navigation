const openButton = document.querySelector('#open');
const navContainer = document.querySelector('.nav-container');
const main = document.querySelector('main');

const navItems = navContainer.querySelectorAll('li');
const navLinks = navContainer.querySelectorAll('a');
const marker = document.querySelector('.marker');

// Menu item click
openButton.addEventListener('click', toggle);

// Add a click event listener for each item
navLinks.forEach(item => item.addEventListener('click', function(e) {  moveMarker(e) }));

// Wait for marker move transition to finish
/* marker.addEventListener('transitionend', close);
marker.addEventListener('webkitTransitionEnd', close);
marker.addEventListener('otransitionend', close);
marker.addEventListener('oTransitionEnd', close);
marker.addEventListener('msTransitionEnd', close); */

// Wait for the key M to be pressed
document.addEventListener('keypress', (e) => {
    if (e.keyCode === 109) toggle();
});

// Handle window resizing and set new x position
window.addEventListener('resize', function() {
    const currentNavItem = navContainer.querySelector('.selected');
    const position = currentNavItem.getBoundingClientRect().left;
    marker.style.marginLeft = `${position}px`;
});

function toggle() {
    // Add or remove class that triggers the menu to open or close
    navContainer.classList.toggle('nav-is-visible');
    main.classList.toggle('nav-is-visible');
}

function moveMarker(e) {
    // Move marker to item position
    const position = e.target.parentElement.getBoundingClientRect().left;
    marker.style.marginLeft = `${position}px`;
    // Remove class from previous item
    navItems.forEach(item => item.classList.remove('selected'));
    // add class to item
    e.target.parentElement.classList.add('selected');
}

function close() {
    // Close navgation
    toggle();
    // Remove transition end listener
    marker.removeEventListener('transitionend', null, null);
}