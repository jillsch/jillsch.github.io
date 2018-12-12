// function footerSlide() {
//   $("footer").slideUp(200);
// }
//
// $(".contact_button").on('click', footerSlide);



//when click on contact button reverse sticky
    //if not at bottom of screen
      //footer slides up

    //else {
      //scrolls through footer, footer sticks to bottom

//when click on different services
    //if box not black outline
      //make it black outline & "get quote button pops out"
    //else
      //leave it





$( document ).ready(function() {
    $('#artwork').addClass("load");
});

$('#box1').hover(function(){
  $(this).toggleClass("show-1");
  $('.cta_box').toggleClass("show-2");
});

$('#box2').hover(function(){
  $(this).toggleClass("show-1");
  $('.cta_box-logo').toggleClass("show-2");
});

$('#box3').hover(function(){
  $(this).toggleClass("show-1");
  $('.cta_box-print').toggleClass("show-2");
});

$('#box4').hover(function(){
  $(this).toggleClass("show-1");
  $('.cta_box-digital').toggleClass("show-2");
});


// mobile 'qet quote' scroll borders on

$(window).on('scroll', function () {
	let distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);
  if( $(window).width() <= 640 ){
	   if (distanceScrolled >=311 && distanceScrolled <=718) {
		 $('.cta_box').addClass('show-2-2');
     $('#box1').addClass('show-1-1');
	   } else {
		 $('.cta_box').removeClass('show-2-2');
     $('#box1').removeClass('show-1-1');
	}
}
  if( $(window).width() <= 640 ){
   if (distanceScrolled >=719 && distanceScrolled <=964) {
   $('.cta_box-logo').addClass('show-2-2');
   $('#box2').addClass('show-1-1');
   } else {
   $('.cta_box-logo').removeClass('show-2-2');
   $('#box2').removeClass('show-1-1');
}
}
if( $(window).width() <= 640 ){
 if (distanceScrolled >=965 && distanceScrolled <=1224) {
 $('.cta_box-print').addClass('show-2-2');
 $('#box3').addClass('show-1-1');
 } else {
 $('.cta_box-print').removeClass('show-2-2');
 $('#box3').removeClass('show-1-1');
}
}
if( $(window).width() <= 640 ){
 if (distanceScrolled >=1225 && distanceScrolled <=2000) {
 $('.cta_box-digital').addClass('show-2-2');
 $('#box4').addClass('show-1-1');
 } else {
 $('.cta_box-digital').removeClass('show-2-2');
 $('#box4').removeClass('show-1-1');
}
}
});
	//
	// if (distanceScrolled > 580) {
	// 	$('.label-1, .label-2, .label-3').addClass('faded-in');
	// } else {
	// 	$('.label-1, .label-2, .label-3').removeClass('faded-in');
	// }
  //
	// if (distanceScrolled > 1400) {
	// 	$('.butterfly').addClass('animated');
	// } else {
	// 	$('.butterfly').removeClass('animated');
	// }





//sticky footer scroll feature

$(window).on('scroll', function () {
  let windowScrollBottom = $(window).scrollTop() + $(window).height();

  if( $(window).width() >= 640 ){
    if (windowScrollBottom >= $(document).height() - 255) {
      $('.sticky-footer').addClass('hide');
    } else {
      $('.sticky-footer').removeClass('hide');
    }
  } else {
    if (windowScrollBottom >= $(document).height() - 355) {
      $('.sticky-footer').addClass('hide');
    } else {
      $('.sticky-footer').removeClass('hide');
    }
  }
});



// $(window).resize(function(){
//
//  if ($('header').width() == 625 ){
//  let windowScrollBottom = $(window).scrollTop() + $(window).width();
//
//  if (windowScrollBottom >= $(document).height() - 355) {
//    $('.sticky-footer').addClass('hide');
//  } else {
//    $('.sticky-footer').removeClass('hide');
//  }
//
// }
// });

// pop up contact box

$('.showModal').on('click', function () {
  $('.modal-background').css("display", "flex").hide().fadeIn();
});

$('#close').on('click', function () {
  $('.modal-background').fadeOut();
});

// hamburger menu

$('.showMenu').on('click', function () {
  $('.menu-modal-background').css("display", "flex").hide().fadeIn();
  $('.hamburger').css("display", "none").hide().fadeOut();
});

$('#close-menu').on('click', function () {
  $('.menu-modal-background').fadeOut();
  $('.hamburger').css("display", "none").hide().fadeIn();
});
