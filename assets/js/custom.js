

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(3000); // set duration in brackets    
  });
  $(window).load(function(){
    $('.body').fadeIn(3000); // set duration in brackets    
  });


  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('.yellow_bar').parallax("50%", 0.3);

  }
  initParallax();


  /* scroll within page
  -----------------------------------------------*/
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
    $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
    });   
    // Animate the scroll to top
  $('.about').click(function(event) {
    event.preventDefault();
  $('html, body').animate({scrollTop: 1300}, 1000);
  })
  $('.contact').click(function(event) {
    event.preventDefault();
  $('html, body').animate({scrollTop: 1300}, 1000);
  })