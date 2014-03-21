$(function() {
  /* Make every internal link in the page turn into a smooth scroll */
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 500);
        return false;
      }
    }
  });

  /* highlight the appropriate menu button when scrolling */
  window.onload = window.onscroll = function(){
    $('.button').select('a[href*=#]:not([href=#])').each(function(i, b){
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      var parent = target.parent();
      var yref = window.pageYOffset;
      if(parent.offset()){
        $(b).toggleClass("active",
	                 (yref >= parent.offset().top - 100 &&
                          yref < parent.offset().top + parent.height()));
      }
    });
  }
});