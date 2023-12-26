var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      // Remove the blur class from all slides
      var slides = document.querySelectorAll('.tranding-slide');
      slides.forEach(function (slide) {
        slide.classList.remove('blur');
      });

      // Add blur class to previous and next slides
      var activeIndex = this.activeIndex;
      slides[activeIndex - 1].classList.add('blur');
      slides[activeIndex + 1].classList.add('blur');
    },
  },
});

var swiperTest = new Swiper('.swiper-container-test', {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination-test',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-test',
    prevEl: '.swiper-button-prev-test',
  },
  on: {
    slideChangeTransitionStart: function () {
      var prevButton = document.querySelector('.swiper-button-prev-test');
      var nextButton = document.querySelector('.swiper-button-next-test');

      // Check if there is a next slide
      if (swiperTest.isEnd) {
        nextButton.style.display = 'none'; // Hide next button
      } else {
        nextButton.style.display = 'block'; // Show next button
      }

      // Check if there is a previous slide
      if (swiperTest.isBeginning) {
        prevButton.style.display = 'none'; // Hide prev button
      } else {
        prevButton.style.display = 'block'; // Show prev button
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const carouselContainer = document.querySelector('.carousel-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;

  const users = [
    {
      name: 'John Doe',
      rating: 4.5,
      image: 'user1.jpg',
    },
    {
      name: 'Jane Smith',
      rating: 5.0,
      image: 'user2.jpg',
    },
    // Add more user data as needed
  ];

  function updateCarousel() {
    const user = users[currentIndex];
    const userContent = `
      <div class="user-image" style="background-image: url('${user.image}')"></div>
      <div class="user-details">
        <h3>${user.name}</h3>
        <p>Rating: ${user.rating}</p>
      </div>
    `;

    carouselContainer.innerHTML = userContent;
  }

  function showNextUser() {
    currentIndex = (currentIndex + 1) % users.length;
    updateCarousel();
  }

  function showPrevUser() {
    currentIndex = (currentIndex - 1 + users.length) % users.length;
    updateCarousel();
  }

  nextBtn.addEventListener('click', showNextUser);
  prevBtn.addEventListener('click', showPrevUser);

  // Initial update
  updateCarousel();
});