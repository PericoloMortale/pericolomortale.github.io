
$(".navbar-header a[href^='#']").on('click', function(e) {

	 // prevent default anchor click behavior
	 e.preventDefault();

	 // store hash
	 var hash = this.hash;

	 // animate
	 $('html, body').animate({
			 scrollTop: $(hash).offset().top -50
		 }, 700, function(){

			 // when done, add hash to url
			 // (default click behaviour)
			 window.location.hash = hash;
		 });

});

$("#back-to-top a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -100
     }, 900, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $('#saints-italia').addClass('navbar-fixed');
    }
  });

$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $('.navbar-static-top-b').addClass('navbar-fixed-b');
    }
  });


$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $('#immagine-sfondo').addClass('immagine-sfondo-b');
    }
  });

/*
    // REGOLARE PULSANTE DI TORNA IN ALTO
    $(window).scroll(function () {

          console.log($(window).scrollTop())
        if ($(window).scrollTop() > 150) {
          $('#back-to-top').removeClass('back-to-top-alto');
        }
        if ($(window).scrollTop() < 150) {
          $('#back-to-top').addClass('back-to-top-alto');
        }
        

      });


/*
$(window).scroll(function () {

          console.log($(window).scrollTop())
        if ($(window).scrollBottom = $(window).scrollTop() + $(window).height() >= 101) {
          $('#back-to-top').removeClass('back-to-top-alto');
        }
        if ($(window).scrollTop() < 100) {
          $('#back-to-top').addClass('back-to-top-alto');
        }

      });


/*
$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 150) {
      $('.twitter-box').addClass('twitter-fixed');
    }
   
    if ($(window).scrollTop() < 149) {
      $('.twitter-box').removeClass('twitter-fixed');
    }
  }); */



