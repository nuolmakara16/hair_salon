<!-- Initialize Swiper -->

var swiper = new Swiper('.swiper-container', {
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
    el: '.swiper-pagination',
    clickable: true,
    },
});
