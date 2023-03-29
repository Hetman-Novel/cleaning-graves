(function ($) {

   "use strict";

   $('.n_fBlocks_items').imagesLoaded(function () {
      var $grid = $('.n_fBlocks_items').isotope({
         itemSelector: '.n_fBlocks_item',
         percentPosition: true,
         masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 2,
         }
      });
      $('.n_fBlocks_buttons').on('click', 'button', function () {
         var filterValue = $(this).attr('data-filter');
         $grid.isotope({ filter: filterValue });
      });
      $('.n_fBlocks_button').on('click', function (event) {
         event.preventDefault();
         //$(this).siblings('.active').removeClass('active');
         $('.n_fBlocks_button').removeClass('active');
         $(this).addClass('active');
      });
   });
})(jQuery);