  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".navbar-content");
  const links = document.querySelectorAll(".navbar-content li");
  
  hamburger.addEventListener('click', () => {
    // Toggle the open class on navLinks
    navLinks.classList.toggle("open");
  
    // Toggle the fade class on each link
    links.forEach((link, index) => {
      // Add a delay to stagger the animation of each link
      setTimeout(() => {
        link.classList.toggle("fade");
      }, index * 100); // Adjust the delay as needed
    });
  
    // Toggle the toggle class on hamburger
    hamburger.classList.toggle("toggle");
  });
  