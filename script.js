const radioButtons = document.querySelectorAll('input[type=radio]');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

const slideShow = () => {
  const showSlide = (index) => {
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = i === index;
    }
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % radioButtons.length;
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
    showSlide(currentIndex);
  };

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 6000); // Auto slide every 3 seconds
};

slideShow();


document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to the target section when a link is clicked
  document.querySelectorAll('.navbar-button').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offset = 0; // Adjust the offset as needed
        window.scrollTo({
          top: targetSection.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });
});