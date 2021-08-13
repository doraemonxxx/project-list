$(document).ready(function () {
  $('#mode').click(function () {
    if ($('body').hasClass('black')) {
      $('body').removeClass('black');
      $(this).text('Black mode');
    } else {
      $('body').addClass('black');
      $(this).text('White mode');
    }
  });

  $(window).load(function () {
      $(".preloader").delay(3000).fadeOut("slow");
      $(".load").delay(3000).fadeOut("slow");
    });


  convert();


  // $(document).keyup(function (e) {
  //   if (e.keyCode === 13) $('button').click();
  // });

});


function convert() {
$('#result').hide();
  $(document).on('input', '#vpwidth', function () {
    "use strict";
    $('#size').html($(this).val() + " px");
    /////////////////////////////////////////////////////////////////////////////
    var BaseViewPort = $(this).val(); //window width size
    var findPX = new RegExp('(\\d+)px', 'g');
    $('button').on('click', function () {
      var css = $('#input_data').val();
      var result;
      while ((result = findPX.exec(css)) !== null) {
        var px = parseInt(result[1]);
        var vw = px / BaseViewPort * 100;
        if (result !== null) {
          css = css.replace(px + 'px', vw.toFixed(3) + 'vw');
        }else{
          //do nothing 
        }
        $('#result').val(css).show();
      }
    });
  });
}





// var _0x9a7f=["\x62\x6C\x61\x63\x6B","\x68\x61\x73\x43\x6C\x61\x73\x73","\x62\x6F\x64\x79","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x42\x6C\x61\x63\x6B\x20\x6D\x6F\x64\x65","\x74\x65\x78\x74","\x61\x64\x64\x43\x6C\x61\x73\x73","\x57\x68\x69\x74\x65\x20\x6D\x6F\x64\x65","\x63\x6C\x69\x63\x6B","\x23\x6D\x6F\x64\x65","\x72\x65\x61\x64\x79","\x69\x6E\x70\x75\x74","\x23\x76\x70\x77\x69\x64\x74\x68","\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x76\x61\x6C","\x20\x70\x78","\x68\x74\x6D\x6C","\x23\x73\x69\x7A\x65","\x28\x5C\x64\x2B\x29\x70\x78","\x67","\x23\x69\x6E\x70\x75\x74\x5F\x64\x61\x74\x61","\x70\x78","\x74\x6F\x46\x69\x78\x65\x64","\x76\x77","\x72\x65\x70\x6C\x61\x63\x65","\x23\x72\x65\x73\x75\x6C\x74","\x65\x78\x65\x63","\x6F\x6E","\x62\x75\x74\x74\x6F\x6E"];$(document)[_0x9a7f[10]](function(){$(_0x9a7f[9])[_0x9a7f[8]](function(){if($(_0x9a7f[2])[_0x9a7f[1]](_0x9a7f[0])){$(_0x9a7f[2])[_0x9a7f[3]](_0x9a7f[0]);$(this)[_0x9a7f[5]](_0x9a7f[4])}else {$(_0x9a7f[2])[_0x9a7f[6]](_0x9a7f[0]);$(this)[_0x9a7f[5]](_0x9a7f[7])}});convert()});function convert(){$(document)[_0x9a7f[27]](_0x9a7f[11],_0x9a7f[12],function(){_0x9a7f[13];$(_0x9a7f[17])[_0x9a7f[16]]($(this)[_0x9a7f[14]]()+ _0x9a7f[15]);var _0x722ax2=$(_0x9a7f[12])[_0x9a7f[14]]();var _0x722ax3= new RegExp(_0x9a7f[18],_0x9a7f[19]);$(_0x9a7f[28])[_0x9a7f[27]](_0x9a7f[8],function(){var _0x722ax4=$(_0x9a7f[20])[_0x9a7f[14]]();var _0x722ax5;while((_0x722ax5= _0x722ax3[_0x9a7f[26]](_0x722ax4))!== null){var _0x722ax6=parseInt(_0x722ax5[1]);var _0x722ax7=_0x722ax6/ _0x722ax2* 100;if(_0x722ax5!== null){_0x722ax4= _0x722ax4[_0x9a7f[24]](_0x722ax6+ _0x9a7f[21],_0x722ax7[_0x9a7f[22]](2)+ _0x9a7f[23])}else {};$(_0x9a7f[25])[_0x9a7f[14]](_0x722ax4)}})})}