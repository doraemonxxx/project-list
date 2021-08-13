$(document).ready(function () {

  $(function () {
    $('.fade_in').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass('fadeIn');
      } else {
        $(this).stop().removeClass('');
      }
    });
    $('.fade_in2').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass('fadeIn2');
      } else {
        $(this).stop().removeClass('');
      }
    });
    $('.fade_up').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass('fadeInUp');
      } else {
        $(this).stop().removeClass('');
      }
    });
    $('.fade_up2').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass('fadeInUp2');
      } else {
        $(this).stop().removeClass('');
      }
    });
  });

  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });

  banner();
  $(document).ready(banner);
  $(window).resize(banner);

  function banner() {
    // var $imgwidth  = $(window).width()  + "px";
    var $banner_height = $(window).height() + "px";
    $('section.banner').css({
      // 'width' : $imgwidth,
      'height': $banner_height
    });
  }

  $('.pagetop a').click(function () {
    var page = $('html, body');
    page.animate({
      scrollTop: 0
    }, 500, function () {});
    return false;
  });

  // if not apple and smarth phone android
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {

    $('#full-page').fullpage({
      css3: false, // for fixed bg and elements
      // anchors: ['top', 'discography', 'members', 'video', 'notice', 'schedule', 'footer'],
      sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
      navigationTooltips: ['TOP', 'DISCOGRAPHY', 'PROFILE', 'VIDEO', 'NOTICE', 'SCHEDULE', 'FOLLOW'],
      scrollingSpeed: 1000,
      navigation: true,
      showActiveTooltip: true,
      controlArrows: false,
      slidesNavigation: true,
      // loopTop: true,
      // loopBottom: true,
      normalScrollElements: '.notice-articles',
      responsiveWidth: 901,
      responsiveHeight: 621,
      afterResponsive: function (isResponsive) {
        var $window_width = $(window).outerWidth();
        var $window_height = $(window).outerHeight();
        if ($window_width <= 900 || $window_height <= 620) {
          console.log('Destroying one-section scroll');
          $('#fp-nav').show();
        } else {
          console.log('Setting-up one-section scroll');
        }
      }
    });
    //
    $('.pagetop a').click(function () {
      $.fn.fullpage.moveTo(1);
    });
  }

  // $('.banner').vegas({
  //      timer: false,
  //      transition: 'fade',
  //      transitionDuration: 3000,
  //      // delay: 6000,
  //      delay: 1000000,
  //      slides: [{
  //          src: 'images/banner/twice-banner-1.jpg'
  //        },
  //        {
  //          src: 'images/banner/twice-banner-2.jpg'
  //        },
  //        {
  //          src: 'images/banner/twice-banner.jpg'
  //        }
  //      ]
  //  });


  $('.members-thumb a').click(function (e) {
    e.preventDefault();
    // highlights or selected
    $('.members-thumb a').removeClass('active');
    $(this).addClass('active');
    // changing bg = members profile
    $('.featured-member').css("background-image", ($('.members-thumb a.active').data("image")));
  });

  // trigger click first link on profile 
  $('.members-thumb a:first').trigger('click');


  // slick slide video
  video_thumb_slide();

  function video_thumb_slide() {
    $('.v-thumb-slide').slick({
      dots: true,
      autoplay: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      swipe: true,
      speed: 700,
      pauseOnFocus: false,
      pauseOnHover: false
    }); //slick

  }

  $('.n-a-t').click(function () {
    var $notice_title = $('.n-a-t'),
      $notice_cont = $('.n-a-c'),
      $cross = $('.plus');

    $notice_cont.slideUp();
    $notice_title.removeClass('open');
    $cross.removeClass('minus');

    if ($(this).next().is(":visible")) {
      $(this).next().slideUp();
      $(this).removeClass('open');
      $(this).find($cross).removeClass('minus');
    } else {
      $(this).next().slideToggle();
      $(this).addClass('open');
      $(this).find($cross).addClass('minus');
    }
  });


  //  size_img();
  //  $(document).ready(size_img);
  //  $(window).resize(size_img);

  //  function size_img() {
  //   // var $imgwidth  = $(window).width()  + "px";
  //   var $imgheight = $(window).height() + "px";
  //   $('section.members div.feature figure').css({
  //     // 'width' : $imgwidth,
  //     'height': $imgheight
  //   });
  // }

  //****https://iloilo.mynimo.com/jobs/view/323251


});


// calendar 
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

  let firstDay = (new Date(year, month)).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("calendar-body"); // body of the calendar

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {
    // creates a table row
    let row = document.createElement("tr");

    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {

      function empty_day() {
        let cell = document.createElement("td");
        let off_sched = document.createElement("div");
        off_sched.className = "sch_off";
        let day = document.createElement("span");
        day.className = "day";
        let cellText = document.createTextNode("");
        cell.appendChild(off_sched);
        off_sched.appendChild(day);
        day.appendChild(cellText);
        row.appendChild(cell);
      }

      function has_day() {
        let cell = document.createElement("td");
        let off_sched = document.createElement("div");
        off_sched.className = "sch_off";
        let day = document.createElement("span");
        day.className = "day";
        let cellText = document.createTextNode(date);
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          // color today's date
          cell.classList.add("today");
        }
        cell.appendChild(off_sched);
        off_sched.appendChild(day);
        day.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }

      // condintion if day has has a number
      if (i === 0 && j < firstDay) {
        empty_day();
      } else if (date > daysInMonth) {
        break;
      } else {
        has_day();
      }
    }

    tbl.appendChild(row); // appending each row into calendar body.
  }

}