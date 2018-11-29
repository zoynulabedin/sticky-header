
(function($){
  "use strict";




    /*** Sticky header */
    $(window).scroll(function() {

        if ($(window).scrollTop() > 300) {
          $("#wrapper-navbar").addClass("sticky");
        } 
        else {
          $("#wrapper-navbar").removeClass("sticky");
        }
    });
    



    
})(jQuery);