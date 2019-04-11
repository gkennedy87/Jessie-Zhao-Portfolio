//Change navbar color on scroll
$(window).scroll(function() {
  if ($(window).scrollTop()) {
      $('.fixed-top').addClass('black');
  }
  else {
    $('.fixed-top').removeClass('black');
  }
})
