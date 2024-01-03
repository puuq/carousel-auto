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

  document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar buttons
    var navbarButtons = document.querySelectorAll('.navbar-button');

    // Add a click event listener to each button
    navbarButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Remove the 'clicked' class from all buttons
        navbarButtons.forEach(function(btn) {
          btn.classList.remove('clicked');
        });

        // Add the 'clicked' class to the clicked button
        button.classList.add('clicked');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Get the home button using its ID
    var homeButton = document.getElementById('homeBtn');

    // Add a click event listener to the home button
    if (homeButton) {
      homeButton.addEventListener('click', function() {
        // Reload the page
        location.reload();
      });
    }
  });