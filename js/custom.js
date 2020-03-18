/* =========================================================
                   SERVICES
============================================================ */
$(function() {
    new WOW().init();
  });
/* =========================================================
                   WORK
============================================================ */
$(function(){
  $("#work").magnificPopup ({
    delegate:'a',
    type:'image',
    gallery:{
      enabled :true
    }
  });
});
/* =========================================================
                          TEAM
============================================================ */
$(function(){
  $("#team-members").owlCarousel({
    autoplay: true,
    items: 3,
    smartSpeed: 900,
    loop : true,
    responsive:{
      0:{
          items:1,
          nav:false,
          loop:true
      },
      600:{
          items:1,
          nav:false,
          loop:true
      },
      1000:{
          items:3,
          nav:false,
          loop:true
      }
  }
    
  });
});
/* =========================================================
                      customer-testimonials
============================================================ */

$(function(){
  $("#customer-testimonials").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 900,
    loop : true,
  //   responsive:{
  //     0:{
  //         items:1,
  //         nav:true
  //     },
  //     600:{
  //         items:3,
  //         nav:false
  //     },
  //     1000:{
  //         items:3,
  //         nav:true,
  //         loop:false
  //     }
  // }
  });
});

/* =========================================================
                      clinets-logo
============================================================ */

$(function(){
  $("#clinets-logo").owlCarousel({
    autoplay: true,
    items: 5,
    smartSpeed: 900,
    loop : true,
    responsive:{
      0:{
          items:3,
          nav:false,
          loop:false
      },
      600:{
          items:3,
          nav:false,
          loop:false
      },
      1000:{
          items:5,
          nav:false,
          loop:true
      }
  }
  });
});
/* =========================================================
                      stat counter
============================================================ */

$(function(){
  $(".counter").counterUp({
    delay: 10,
    time: 3000
  });
});

/* =========================================================
                     TOGGLE
============================================================ */
$(function(){
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
});



/* =========================================================
                     navbar hide
============================================================ */

$(function(){
$(window).scroll(function(){
  if ($(this).scrollTop() < 100) {
    $('#back-to-top').fadeOut();  
    
  } else {
    $('#back-to-top').fadeIn();
  }
});
   
//Click event scroll to top button jquery

$('#back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},60);
  return false;
});
});






$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});