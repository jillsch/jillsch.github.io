// $(window).on('scroll', function () {
//
//   let windowScrollBottom = $(window).scrollTop() + $(window).height();
//
//   console.log('distance scrolled', windowScrollBottom);
//   console.log('offset', $(document).height()-255);
//   if (windowScrollBottom >= $(document).height() - 255) {
//     $('.sticky-footer').addClass('hide');
//   } else {
//     $('.sticky-footer').removeClass('hide');
//   }
// });
//
// $('.showModal').on('click', function () {
//   $('.modal-background').css("display", "flex").hide().fadeIn();
// });
//
// $('#close').on('click', function () {
//   $('.modal-background').fadeOut();
// });
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

  // $(document).ready(function() {
  //   $('.hi_message').fadeIn(200);
  //   $('.hi_message').removeClass('hi_message');
  //   // $('.hi_box').fadeIn(300);
  // });


//hamburger pop up menu

$('.showMenu').on('click', function () {
  $('.menu-modal-background').css("display", "flex").hide().fadeIn();
  $('.hamburger').css("display", "none").hide().fadeOut();
});

$('#close-menu').on('click', function () {
  $('.menu-modal-background').fadeOut();
  $('.hamburger').css("display", "none").hide().fadeIn();
});
