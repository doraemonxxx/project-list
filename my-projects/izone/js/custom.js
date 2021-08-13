$(document).ready(function () {


  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });


  new_height();

  $(window).resize(new_height);

  function new_height(){
    var $mob_ban_height = $(window).outerHeight();
    var $mob_ban_width = $(window).outerWidth();

    if ($mob_ban_height < 501 && $mob_ban_width == 500 ) {
      $('.vcon').css("height", "140vh");
    }
    else{
      $('.vcon').css("height", "");
    }
  }


  mobile_menu();

  function mobile_menu() {
    var $toggleButton = $('.toggle-button'),
      $menuWrap = $('header>nav ul'),
      $body = $('body, html');

    $toggleButton.click(function () {
      if ($menuWrap.css('display') == 'none') {
        $menuWrap.fadeIn('normal').css("display", "flex");
        $menuWrap.addClass('menu-show');
        $toggleButton.addClass('button-open');
        $body.addClass('overflowhidden');
        //setTimeout(function() {$body.addClass('overflowhidden');}, 230);
      } else {
        $menuWrap.fadeOut('normal');
        $menuWrap.removeClass('menu-show');
        $toggleButton.removeClass('button-open');
        $body.removeClass('overflowhidden');
      }
    });


  }


  $('.world_tour > h2').remove();


  video_parallax();

  function video_parallax() {
    ///parallax video
    $(window).scroll(function () {
      $('.video-wrap').css("opacity", 1 - $(window).scrollTop() / 750)
    });

    $(document).ready(function () {
      $('#my-video').backgroundVideo({
        pauseVideoOnViewLoss: true
      });
    });

    //create element video
    var $video = $('<video />', {
      id: 'my-video',
      preload: 'metadata',
      autoplay: true,
      loop: true,
      src: 'images/video/cut-mp4.mp4',
      type: 'video/mp4',
      controls: false
    });

    $video.appendTo($('#video-wrap'));
  }


  //parallax bg image
  // $(".parallax").parallax();


  $('.backtotop').click(function () {
    var $root = jQuery('html, body');
    $root.animate({
      scrollTop: 0
    }, 500, function () {});
    return false;
  });

  slicks();

  function slicks() {
    $('.carousels').slick({
      autoplay: true,
      autoplaySpeed: 30000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      swipe: false,
      speed: 700,
      pauseOnFocus: false,
      asNavFor: '.news-articles'
    }); //slick


    $('.news-articles').slick({
      slidesToShow: 1,
      swipe: false,
      arrows: false,
      speed: 700,
      fade: true,
      asNavFor: '.carousels'
    }); //slick


    $('.v-slides').slick({
      centerMode: true,
      centerPadding: '27%',
      dots: true,
      slidesToShow: 1,
      arrows: false
    });

  }


  ////////////////////////modal youtube////////////////////////////////////////////

  $(".youtube").click(function () {
    $('body').addClass('modal_overflow');
    $("#yt_modal").fadeIn("slow").addClass('modal_active');
    $('.video-wrap').css({
      'opacity': '0.5'
    });
  });

  $("#close").click(function () {
    $('body').removeClass('modal_overflow');
    $("#yt_modal").fadeOut("normal").removeClass('modal_active');
    $('.video-wrap').css({
      'opacity': ''
    });
  });


  /// click escape close modals
  $(document).keyup(function (event) {
    if (event.keyCode === 27) {
      $('#close').click();
      $('#sub_close').click();
    }
  });


  ////////////////////////modal subscribe/////////////////////////////////////
  $(".link_subs").click(function () {
    $("#subscribe").fadeIn("slow").addClass('subscribe_active');
    $('.bottom').addClass('opacity');
    $('.tour_wrap').addClass('opacity');
  });
  $("#sub_close").click(function () {
    $("#subscribe").fadeOut("normal").removeClass('subscribe_active');
    $('.bottom').removeClass('opacity');
    $('.tour_wrap').removeClass('opacity');
  });


  /////////////////////accordion//////////////////////////////////////
  $(".terms").click(function () {
    $(this).text("Terms");
    if ($('.terms_con').is(':visible')) {
      $(".terms_con").slideUp("normal");
      $(this).text("Terms");
    } else {
      $(".terms_con").slideDown("normal");
      $(this).text("Hide");
    }
  });


  $(".second_terms").click(function () {
    $(this).text("Terms");
    if ($('.second_terms_con').is(':visible')) {
      $(".second_terms_con").slideUp("normal");
      $(this).text("Terms");
    } else {
      $(".second_terms_con").slideDown("normal");
      $(this).text("Hide");
    }
  });


  $(".third_terms").click(function () {
    $(this).text("Terms");
    if ($('.third_terms_con').is(':visible')) {
      $(".third_terms_con").slideUp("normal");
      $(this).text("Terms");
    } else {
      $(".third_terms_con").slideDown("normal");
      $(this).text("Hide");
    }
  });


  //////////subscribe valiation///////////////

  $('#submit').click(function () {
    if (!$('#email').val()) {
      $('#email').addClass('invalid');
      $("#submit").prop('disabled', true).addClass('disable');
      $('#for_email').text('Please input email.').css("display", "block");
    }
  });


  $('#email').bind("keyup focusout", function () {
    if (!validateEmail($(this).val())) {
      $('#email').addClass('invalid');
      $("#submit").prop('disabled', true).addClass('disable');
      $('#for_email').text('Please input valid email.').css("display", "block");
    } else {
      $('#email').removeClass('invalid');
      $("#submit").prop('disabled', false).removeClass('disable');
      $('#for_email').text('').hide();
    }
  });


  //////////////second subscribe valiation////////////////////
  $('#second_submit').click(function () {
    if (!$('#second_email').val()) {
      $('#second_email').addClass('invalid');
      $("#second_submit").prop('disabled', true).addClass('disable');
      $('#second_for_email').text('Please input email.').css("display", "block");
    }
  });

  $('#second_email').bind("keyup focusout", function () {
    if (!validateEmail($(this).val())) {
      $('#second_email').addClass('invalid');
      $("#second_submit").prop('disabled', true).addClass('disable');
      $('#second_for_email').text('Please input valid email.').css("display", "block");
    } else {
      $('#second_email').removeClass('invalid');
      $("#second_submit").prop('disabled', false).removeClass('disable');
      $('#second_for_email').text('').hide();
    }
  });


  //////////////third subscribe valiation////////////////////
  $('#third_submit').click(function () {
    if (!$('#third_email').val()) {
      $('#third_email').addClass('invalid');
      $("#third_submit").prop('disabled', true).addClass('disable');
      $('#third_for_email').text('Please input email.').css("display", "block");
    }
  });

  $('#third_email').bind("keyup focusout", function () {
    if (!validateEmail($(this).val())) {
      $('#third_email').addClass('invalid');
      $("#third_submit").prop('disabled', true).addClass('disable');
      $('#third_for_email').text('Please input valid email.').css("display", "block");
    } else {
      $('#third_email').removeClass('invalid');
      $("#third_submit").prop('disabled', false).removeClass('disable');
      $('#third_for_email').text('').hide();
    }
  });


  music_banner_pos();
  $(window).resize(music_banner_pos);

  function music_banner_pos() {
    var $windowsize = $(window).outerWidth(); // outerwidth will detect browsers width with scrollbar
    if ($windowsize <= 799) {
      $('.music_section').css({
        'background-position': ''
      });
    } else if ($windowsize <= 1000) {
      $('.music_section').css({
        'background-position': '100% 0%'
      });
    } else if ($windowsize >= 1001) {
      $('.music_section').css({
        'background-position': ''
      });
    }
  }


  reisze_changes();
  $(window).resize(reisze_changes);

  function reisze_changes() {
    var $width = $(window).outerWidth(); // outerwidth will detect browsers width with scrollbar

    //less than 800
    if ($width <= 800) {

      $('.bottom nav ol li:nth-child(1) a').text('Watch');
      $('.bottom nav ol li:nth-child(2) a').text('Remix');
      $('.bottom nav ol li:nth-child(3) a').text('Album');
      $('.bottom nav ol li:nth-child(4) a').text('Tour');

      // click
      //1
      $('#submit').click(function () {
        if (!$('#email').val()) {
          $('.terms').css("margin-top", "4vw");
        }
      });
      //2
      $('#second_submit').click(function () {
        if (!$('#second_email').val()) {
          $('.second_terms').css("margin-top", "4vw");
        }
      });
      //3
      $('#third_submit').click(function () {
        if (!$('#third_email').val()) {
          $('.third_terms').css("margin-top", "4vw");
        }
      });

      // input focus and keyup
      //1
      $('#email').bind("keyup focusout", function () {
        if (!validateEmail($(this).val())) {
          $('.terms').css("margin-top", "4vw");
        } else {
          $('.terms').css("margin-top", "1.63vw");
        }
      });
      //2
      $('#second_email').bind("keyup focusout", function () {
        if (!validateEmail($(this).val())) {
          $('.second_terms').css("margin-top", "4vw");
        } else {
          $('.second_terms').css("margin-top", "1.63vw");
        }
      });
      //3
      $('#third_email').bind("keyup focusout", function () {
        if (!validateEmail($(this).val())) {
          $('.third_terms').css("margin-top", "4vw");
        } else {
          $('.third_terms').css("margin-top", "1.63vw");
        }
      });

      // visible or hidden
      //1
      if ($('#for_email').is(":visible")) {
        $('.terms').css("margin-top", "4vw");
      } else {
        $('.terms').css("margin-top", "1.63vw");
      }
      //2
      if ($('#second_for_email').is(":visible")) {
        $('.second_terms').css("margin-top", "4vw");
      } else {
        $('.second_terms').css("margin-top", "1.63vw");
      }
      //3
      if ($('#third_for_email').is(":visible")) {
        $('.third_terms').css("margin-top", "4vw");
      } else {
        $('.third_terms').css("margin-top", "1.63vw");
      }

      //greater than 800
    } else if ($width >= 800) {

      $('.bottom nav ol li:nth-child(1) a').text('Watch La Vie En Rose');
      $('.bottom nav ol li:nth-child(2) a').text('Download or Stream');
      $('.bottom nav ol li:nth-child(3) a').text('Buy Albums');
      $('.bottom nav ol li:nth-child(4) a').text('See IZ*ONE on Tour');

      // click
      //1
      $('#submit').click(function () {
        if (!$('#email').val()) {
          $('.terms').css("margin-top", "1.6vw");
        }
      });
      //2
      $('#second_submit').click(function () {
        if (!$('#second_email').val()) {
          $('.second_terms').css("margin-top", "1.6vw");
        }
      });
      //3
      $('#third_submit').click(function () {
        if (!$('#third_email').val()) {
          $('.third_terms').css("margin-top", "1.6vw");
        }
      });

      // input focus and keyup
      //1
      $('#email').bind("keyup focusout", function () {
        if (!validateEmail($(this).val())) {
          $('.terms').css("margin-top", "1.6vw");
        } else {
          $('.terms').css("margin-top", "1vw");
        }
      });
      //2
      $('#second_email').bind("keyup focusout", function () {
        if (!validateEmail($(this).val())) {
          $('.second_terms').css("margin-top", "1.6vw");
        } else {
          $('.second_terms').css("margin-top", "1vw");
        }
      });
      //3
      $('#third_email').bind("keyup focusout", function () {
        if (!validateEmail($(this).val())) {
          $('.third_terms').css("margin-top", "1.6vw");
        } else {
          $('.third_terms').css("margin-top", "1vw");
        }
      });

      // visible or hidden
      //1
      if ($('#for_email').is(":visible")) {
        $('.terms').css("margin-top", "1.6vw");
      } else {
        $('.terms').css("margin-top", "1vw");
      }
      //2
      if ($('#second_for_email').is(":visible")) {
        $('.second_terms').css("margin-top", "1.6vw");
      } else {
        $('.second_terms').css("margin-top", "1vw");
      }
      //3
      if ($('#third_for_email').is(":visible")) {
        $('.third_terms').css("margin-top", "1.6vw");
      } else {
        $('.third_terms').css("margin-top", "1vw");
      }

    }
  }


  ///////////////////word tour navigation//////////////////////////

  $('.world_tour .nav li:not(:last-child) a').on('click', function (e) {
    e.preventDefault();
    var $link = $('.world_tour .nav li:not(:last-child) a');
    var $container = $('.tour_wrap > div');

    $link.removeClass('active_link');
    $(this).addClass('active_link');
    $container.hide();
    $($(this).attr('href')).show();
  });

  $('.world_tour .nav a:first').trigger('click');


  ///////////////////stream music navigation//////////////////////////


  $('#playlist li a').on('click', function (e) {
    e.preventDefault();
    var $play_link = $('#playlist li a');
    var $playlist_con = $('.column_2 > div');

    $play_link.removeClass('play_link');
    $(this).addClass('play_link');
    $playlist_con.hide();
    $($(this).attr('href')).show();
  });

  $('#playlist li a:first').trigger('click');


  /////////no choice. tamad nako mag edit hahaha/////////////////

  dipota_nga_function_ni();

  function dipota_nga_function_ni() {
    $('.hover-down-container').hover(function () {
      $('.hover-down').append('<style id="dipota">.music_section div.column_3 ul li > a.hover-down::before{border-color:#fb2277;} .music_section div.column_3 ul li > a.hover-down{color:#fb2277; background-color: #ffffff;} .music_section div.column_3 ul li > a.hover-down i{transform: translateY(50%) translateX(-25%) rotate(90deg);</style>');
    }, function () {
      $('#dipota').remove();
    });
  }


  // $(document).on('show.visibility', function() {
  //   $('#my-video').get(0).play();
  // });
  // $(document).on('hide.visibility', function() {
  //   $('#my-video').get(0).pause();
  // });


  msieversion();

  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      alert("Website dont work properly on IE!");
    } else {
      // do nothing
    }
    return false;
  }

  ipad();

  function ipad() {
    var is_iPad = navigator.userAgent.match(/iPad/i) != null;
    if (is_iPad) {
      $('.world_tour').css("background-attachment", "unset");
    } else {

    }
    return false;
  }


});


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


function isInViewport(node) {
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}