  (function(d) {
   var config = {
     kitId: 'lfs2imh',
     scriptTimeout: 3000,
     async: true
   },
   h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
 })(document);
 try{Typekit.load({ async: true });}catch(e){}

(function ($) {
  $(document).ready(function(){


    // add if mobile later
    document.addEventListener('touchstart', function() {}, false);

    //
    // style guide page only
      var $styleTest = $('a[name="ul"]').next().next().find('ul');
      var $styleTest2 = $('a[name="ul_long"]').next().next().find('ul');
      $styleTest.addClass('shell');
      $styleTest2.addClass('shell');

      $('#date_field').datepicker();

      NaplesMap.initMap(26.1422034,-81.8026296);
    //
    //

    // wrap ordered list tags
    $('ol li').each(function(){
      $(this).wrapInner('<span />');
    }).parent().addClass('bold');

    // wrap blockquotes
    $('blockquote').wrap('<div class="quote-wrap" />')
      .before('<hr class="blockquote shell" />')
      .after('<hr class="blockquote" />');

    // $('a.lightbox').on('click', function() {
    $('a.lightbox').click(function() {
      var $that = $(this),
          type = $that.data('lightbox-type');
      NaplesMain.lightbox.create(type);
      return false;
    });


    $(document).keydown(function(e){
      // esc key
      if (e.keyCode == 27) {
        $('a.lightbox').blur();
        NaplesMain.lightbox.remove();
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
