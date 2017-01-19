(function ($) {
  $(document).ready(function(){


    // add if mobile later
    document.addEventListener('touchstart', function() {}, false);



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
