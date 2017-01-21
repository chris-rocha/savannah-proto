(function ($) {
  $(document).ready(function(){


    document.addEventListener('touchstart', function() {}, false);

    // $('.step-in .swatch').hide().delay(500).each(function(i) {
    //   $(this).delay(i*120).fadeIn('slow');
    // });


    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene
    new ScrollMagic.Scene({
          triggerElement: "figure" // could be another selector
          // , offset: -($(window).height()) / 4
          // , duration: 600
        })
        .setClassToggle("figure", 'active')
        // .setPin("figure")
        // .addIndicators()
        .addTo(controller); // assign the scene to the controller


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

// $(function () { // wait for document ready
//   // init
//   var controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//       triggerHook: 'onLeave'
//     }
//   });

//   // get all slides
//   var slides = document.querySelectorAll("section.panel.stick");

//   // create scene for every slide
//   for (var i=0; i<slides.length; i++) {
//     new ScrollMagic.Scene({
//         triggerElement: slides[i]
//       })
//       .setPin(slides[i])
//       .addIndicators() // add indicators (requires plugin)
//       .addTo(controller);
//   }
// });
