if (document.querySelectorAll('.works-item').length > 1) {
   document.getElementById('works-navigation').classList.remove('hidden');
}
const works_slider = document.getElementById('works-slider')
if (works_slider) {
   new Swiper(works_slider, {
      navigation: {
         prevEl: '#works-button-prev',
         nextEl: '#works-button-next',
      },
      pagination: {
         el: '#works-pagination',
         type: 'fraction',
         renderFraction: function (currentClass, totalClass) {
            return '<span id="works-current-zero" class="block-slider__number-current-zero">0</span><span class="' + currentClass + '"></span><span class="block-slider__slash">/</span><span id="works-number-slides-zero" class="block-slider__number-slides-zero">0</span><span class="' + totalClass + '"></span>';
         },
      },
      simulateTouch: false,
      slideToClickedSlide: true,
      autoHeight: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 42,
      loop: true,
      speed: 800,
      effect: 'slide',
      allowTouchMove: false,
      slideToClickedSlide: false,

      breakpoints: {
         801: {
            slidesPerView: 3,
            slidesPerGroup: 1,
         },
         992: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 42,
         }
      },
   });
}
if (document.querySelectorAll('.works-device-item').length > 11) {
   document.getElementById('works-number-slides-zero').remove();
}