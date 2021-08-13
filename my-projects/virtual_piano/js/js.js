$(document).ready(function () {

  $(window).load(function(){
    $(".preload").delay(3000).fadeOut("slow");
    $(".load").delay(3000).fadeOut("slow");
  });

  $('.slide_quote').slick({
    autoplay: true,
    autoplaySpeed: 9000,
    infinite: true,
    dots: true,
    focusOnSelect: true,
    pauseOnFocus: false
  });

});