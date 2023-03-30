if (window.matchMedia("(max-width: 800px)").matches) {
   if (document.querySelectorAll('.works-device-item').length > 1) {
      document.getElementById('works-devicce-swiper-navigation').classList.remove('hidden');
   }
   const home_works_device_slider = document.getElementById('works-device-slider')
   if (home_works_device_slider) {
      new Swiper(home_works_device_slider, {
         navigation: {
            prevEl: '#works-devicce-button-prev',
            nextEl: '#works-devicce-button-next',
         },
         pagination: {
            el: '#works-devicce-swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
               return '<span id="works-current-zero" class="block-slider__number-current-zero">0</span><span class="' + currentClass + '"></span><span class="block-slider__slash">/</span><span id="works-devicce-number-slides-zero" class="block-slider__number-slides-zero">0</span><span class="' + totalClass + '"></span>';
            },
         },
         simulateTouch: false,
         slideToClickedSlide: true,
         autoHeight: false,
         slidesPerView: 1,
         watchOverflow: true,
         spaceBetween: 80,
         loop: true,
         speed: 800,
         effect: 'fade',
         fadeEffect: {
            crossFade: true
         },
         allowTouchMove: false,
         slideToClickedSlide: false,
      });
   }
   if (document.querySelectorAll('.works-device-item').length > 11) {
      document.getElementById('works-number-slides-zero').remove();
   }
}