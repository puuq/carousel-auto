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
