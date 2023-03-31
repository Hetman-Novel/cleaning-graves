if (document.querySelectorAll('.big-slider-slide').length > 1) {
   document.getElementById('single-cemeteries-slider-navigation').classList.remove('hidden');
}
if (window.matchMedia("(min-width: 661px)").matches) {
   var swiper = new Swiper("#small-slider-cemeteries", {
      loop: true,
      spaceBetween: 34,
      navigation: {
         nextEl: ".slider-btn-next",
         prevEl: ".slider-btn-prev",
      },
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      slideToClickedSlide: false,
      breakpoints: {
         660: {
            spaceBetween: 15,
            slidesPerView: 4,
         },
         1200: {
            spaceBetween: 34,
            slidesPerView: 5,
         }
      },
   });
   var swiper2 = new Swiper("#big-slider-cemeteries", {
      loop: true,
      spaceBetween: 50,
      navigation: {
         nextEl: ".slider-btn-next",
         prevEl: ".slider-btn-prev",
      },
      thumbs: {
         swiper: swiper,
      },
      pagination: {
         el: '#single-cemeteries-pagination',
         type: 'fraction',
         renderFraction: function (currentClass, totalClass) {
            return '<span id="single-cemeteries-current-zero" class="block-slider__number-current-zero">0</span><span class="' + currentClass + '"></span><span class="block-slider__slash">/</span><span id="single-cemeteries-number-slides-zero" class="block-slider__number-slides-zero">0</span><span class="' + totalClass + '"></span>';
         },
      }
   });
}
if (window.matchMedia("(max-width: 660px)").matches) {
   const big_slider_cemeteries = document.querySelector('.single-cemeteries__big-sliders')
   if (big_slider_cemeteries) {
      new Swiper(big_slider_cemeteries, {
         loop: true,
         spaceBetween: 50,
         navigation: {
            nextEl: "#slider-btn-next",
            prevEl: "#slider-btn-prev",
         },
         thumbs: {
            swiper: swiper,
         },
         pagination: {
            el: '#single-cemeteries-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
               return '<span id="single-cemeteries-current-zero" class="block-slider__number-current-zero">0</span><span class="' + currentClass + '"></span><span class="block-slider__slash">/</span><span id="single-cemeteries-number-slides-zero" class="block-slider__number-slides-zero">0</span><span class="' + totalClass + '"></span>';
            },
         }
      });
   }
}
if (document.querySelectorAll('.big-slider-slide').length > 11) {
   document.getElementById('single-cemeteries-number-slides-zero').remove();
}