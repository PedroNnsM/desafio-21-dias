const $simpleCarousel = document.querySelector('.js-carousel')

new Glider($simpleCarousel, {
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    dots: ".js-carousel--simple-dots",
    arrows: {
      prev: ".js-carousel--simple-prev",
      next: ".js-carousel--simple-next",
    },
  });