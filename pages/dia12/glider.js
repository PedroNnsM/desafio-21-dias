const $thumbsCarousel = document.querySelector('.js-carousel--thumbs')
const $thumbs = document.querySelectorAll("[data-carousel-index]")

const thumbsGlider = new Glider($thumbsCarousel,{

    slideToShow:1,  
    slideToScroll:1
});

$thumbs.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        const index = e.target.getAttribute('data-carousel-index');
       
        thumbsGlider.scrollItem(index, true);
    });
});