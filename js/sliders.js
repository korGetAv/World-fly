'use strict';

// Destination slider
let destinationSwiperWrapper = document.querySelector('.destination-swiper-wrapper');
let destinationSelector = destinationSwiperWrapper.querySelector('.swiper');
const destinationSwiper = new Swiper(destinationSelector, {
    freeMode: true,
    grabCursor: true,
    slidesPerView: 1.2,
    spaceBetween: 15,
    breakpoints: {
        768: {
            slidesPerView: 1.2,
            spaceBetween: 40,
        },
        860: {
            slidesPerView: 1.3,
            spaceBetween: 60,
        },
        1024: {
            slidesPerView: 1.3,
            spaceBetween: 60,
        },
        1160: {
            slidesPerView: 1.5,
            spaceBetween: 60,
        },
        1340: {
            slidesPerView: 1.7,
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