<!-- Initialize Swiper -->

var swiper1 = new Swiper('.swiper1', {
    initialSlide: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    parallax: true,
    speed: 1000,
    loop: true,
    keyboard: {
    enabled: true,
},
autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
pagination: {
    el: '.swiper-pagination1',
    clickable: true,
    },
});

var swiper2 = new Swiper('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
    },
});
var swiper3 = new Swiper('.swiper3', {
    navigation: {
        nextEl: '.swiper-button-next-3',
    },
});
var swiper4 = new Swiper('.swiper4', {
    navigation: {
        nextEl: '.swiper-button-next-4',
    },
});
AOS.init();