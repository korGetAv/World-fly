'use strict';

// Destination slider
const destinationSwiper = function () {
    let destinationSwiperWrapper = document.querySelector('.destination__swiper-wrapper');
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
}();

// Package slider
const packageSwiper = function () {
    let packageSwiperWrapper = document.querySelector('.package__swiper-wrapper');
    let packageSelector = packageSwiperWrapper.querySelector('.swiper');
    let packagePrev = packageSwiperWrapper.querySelector('.swiper-button-prev');
    let packageNext = packageSwiperWrapper.querySelector('.swiper-button-next');
    const packageSwiper = new Swiper(packageSelector, {
        freeMode: true,
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        breakpoints: {
            768: {
                spaceBetween: 40,
            },
            860: {
                spaceBetween: 50,
            },
            1340: {
                spaceBetween: 60,
            }
        },
        navigation: {
            prevEl: packagePrev,
            nextEl: packageNext,
        },
    })
}();