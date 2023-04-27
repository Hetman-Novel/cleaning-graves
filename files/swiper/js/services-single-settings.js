
if (window.matchMedia("(max-width: 860px)").matches) {
    if (document.querySelectorAll('.single-services').length > 1) {
        document.getElementById('single-services-navigation').classList.remove('hidden');
     }
     const single_service_slider = document.querySelector('.single-service-slider')
     if (single_service_slider) {
        new Swiper(single_service_slider, {
           navigation: {
              prevEl: '#single-cervice-btn-prev',
              nextEl: '#single-cervice-btn-next',
           },
           pagination: {
              el: '#single-services-navigation',
              type: 'fraction',
              renderFraction: function (currentClass, totalClass) {
                 return '<span id="single-service-current-zero" class="block-slider__number-current-zero">0</span><span class="' + currentClass + '"></span><span class="block-slider__slash">/</span><span id="single-services-number-slides-zero" class="block-slider__number-slides-zero">0</span><span class="' + totalClass + '"></span>';
              },
           },
           autoHeight: true,
           simulateTouch: false,
           slideToClickedSlide: true,
           slidesPerView: 1,
           watchOverflow: true,
           spaceBetween: 50,
           loop: true,
           speed: 800,
           effect: 'fade',
           fadeEffect: {
              crossFade: true
           },
           parallax: true,
        });
     }
     if (document.querySelectorAll('.single-services').length > 11) {
        document.getElementById('single-service-current-zero').remove();
     }
}