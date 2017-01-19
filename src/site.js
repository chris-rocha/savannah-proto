(function ($) {
  $(document).ready(function(){


    document.addEventListener('touchstart', function() {}, false);

    // $('.step-in .swatch').hide().delay(500).each(function(i) {
    //   $(this).delay(i*120).fadeIn('slow');
    // });


    $(document).keydown(function(e){
      // esc key
      if (e.keyCode == 27) {
      }
    });


  }); // document ready

  $(document).ajaxSuccess(function(){
    // Drupal.attachBehaviors();
  });

  //
  //$(document).ajaxStart(function(){
  //});
  //

})(jQuery);
