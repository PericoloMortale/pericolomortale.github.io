

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

$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 150) {
      $('#saints-italia').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 149	) {
      $('#saints-italia').removeClass('navbar-fixed');
    }
  });

$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 150) {
      $('.navbar-static-top-b').addClass('navbar-fixed-b');
    }
    if ($(window).scrollTop() < 149) {
      $('.navbar-static-top-b').removeClass('navbar-fixed-b');
    }
  });


$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 150) {
      $('#immagine-sfondo').addClass('immagine-sfondo-b');
    }
   
    if ($(window).scrollTop() < 149) {
      $('#immagine-sfondo').removeClass('immagine-sfondo-b');
    }
  });


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
  });



