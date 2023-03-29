const price_buttons_filter = document.querySelector('.prices-slider__buttons-filter')
if (price_buttons_filter) {
   new Swiper(price_buttons_filter, {
      navigation: {
         prevEl: '.prices__btn-filter-prev',
         nextEl: '.prices__btn-filter-next',
      },
      simulateTouch: false,
      slideToClickedSlide: false,
      slidesPerView: 6,
      watchOverflow: true,
      spaceBetween: 13.5,
      //loop: true,
      speed: 800,
      effect: 'slide',

      breakpoints: {
         0: {
            spaceBetween: 13.5,
            slidesPerView: 2.19,
         },
         500: {
            slidesPerView: 3.19,
         },
         641: {
            slidesPerView: 2,
            spaceBetween: 15,
         },
         800: {
            slidesPerView: 3,
         },
         1024: {
            slidesPerView: 4,
         },
         1200: {
            slidesPerView: 5,
         },
         1281: {
            spaceBetween: 22.15,
            slidesPerView: 6,
         }
      },
   });
}