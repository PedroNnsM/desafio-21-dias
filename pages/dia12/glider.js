const $thumbsCarousel = document.querySelector('.glider-contain-thumbs')
const $thumbs = document.querySelectorAll("[data-carousel-index]")

const thumbsGlider = new Glider($thumbsCarousel,{

    slideToShow:1,
    slideToScroll:1
})