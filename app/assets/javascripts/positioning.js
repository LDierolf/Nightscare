// Azubiskript v1.0
$(function() {
  $('header.full_screen').css('width', window.innerWidth + 'px');
  $('header.full_screen').css('height', window.innerHeight + 'px');
  $('.welcome_container').css('top', (window.innerHeight /2 - 161) + 'px')
  window.onresize = function() {
    $('header.full_screen').css('width', window.innerWidth + 'px');
    $('header.full_screen').css('height', window.innerHeight + 'px');
    $('.welcome_container').css('top', (window.innerHeight /2 - 161) + 'px')
  };
});

$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_after_slider = window.innerHeight - 80;

  if(y_scroll_pos > scroll_pos_after_slider) {
    $('header.nav').slideDown( "slow" );
  }
  else{
    $('header.nav').slideUp( "slow" );
  }
});