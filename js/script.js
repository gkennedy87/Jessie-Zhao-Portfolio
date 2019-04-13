//Change navbar color on scroll
$(window).scroll(function() {
  if ($(window).scrollTop()) {
      $('.fixed-top').addClass('seeThru');
  }
  else {
    $('.fixed-top').removeClass('seeThru');
  }
})
