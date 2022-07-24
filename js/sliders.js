'use strict';

// Destination slider
let destinationSwiperWrapper = document.querySelector('.destination-swiper-wrapper');
let destinationSelector = destinationSwiperWrapper.querySelector('.swiper');
const destinationSwiper = new Swiper(destinationSelector, {
    freeMode: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    breakpoints: {
        768: {
            spaceBetween: 40,
        },
        860: {
            spaceBetween: 60,
        },
        1340: {
            spaceBetween: 75,
        }
    }
});

let slideIcons = destinationSwiperWrapper.querySelectorAll('.slide__icon');
for (let slideIcon of slideIcons) {
    slideIcon.addEventListener('click', (e) => {
        let slideCount = slideIcon.querySelector('.slide__count');
        if (slideIcon.classList.contains('_active')) {
            slideIcon.classList.remove('_active');
            slideCount.innerHTML = +slideCount.innerHTML - 1;
        } else {
            slideIcon.classList.add('_active');
            slideCount.innerHTML = +slideCount.innerHTML + 1;
        }

        e.preventDefault();
    });
}