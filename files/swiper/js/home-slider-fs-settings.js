if (document.querySelectorAll('.first-screen__item').length > 1) {
   document.getElementById('fs-slider-navigation').classList.remove('hidden');
}
const home_fs_slider = document.querySelector('.home-slider-fs')
if (home_fs_slider) {
   new Swiper(home_fs_slider, {
      navigation: {
         prevEl: '#home-fs-swiper-button-prev',
         nextEl: '#home-fs-swiper-button-next',
      },
      pagination: {
         el: '#home-fs-swiper-pagination',
         type: 'fraction',
         renderFraction: function (currentClass, totalClass) {
            return '<span id="fs-current-zero" class="block-slider__number-current-zero">0</span><span class="' + currentClass + '"></span><span class="block-slider__slash">/</span><span id="fs-number-slides-zero" class="block-slider__number-slides-zero">0</span><span class="' + totalClass + '"></span>';
         },
      },
      autoHeight: false,
      simulateTouch: false,
      slideToClickedSlide: true,
      autoHeight: true,
      slidesPerView: 1,
      watchOverflow: true,
      spaceBetween: 40,
      loop: true,
      speed: 800,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      parallax: true,
   });
}
if (document.querySelectorAll('.first-screen__item').length > 11) {
   document.getElementById('fs-number-slides-zero').remove();
}