function toggleActive(event, button) {
    event.preventDefault();
    var buttons = document.querySelectorAll('.navbar-button');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

function toggleNavbarList() {
    var navbarList = document.getElementById('navbarList');
    var navbarListOverlay = document.querySelector('.navbar-list-overlay');

    navbarList.classList.toggle('active');
    navbarListOverlay.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
}

function closeNavbarList() {
    var navbarList = document.getElementById('navbarList');
    var navbarListOverlay = document.querySelector('.navbar-list-overlay');

    navbarList.classList.remove('active');
    navbarListOverlay.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
}