const hamburger = document.querySelector('.navbar .nav-bar .navbar-list .hamburger');
const mobile_menu = document.querySelector('.navbar .nav-bar .navbar-list ul');
const menu_item = document.querySelectorAll('.navbar .nav-bar .navbar-list ul li a');

const navbar = document.querySelector('.navbar.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        navbar.style.backgroundcolor = "#C3FDB8";

    } else {
        navbar.style.backgroundcolor = "transparent";

    }
});
menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');

    });
});