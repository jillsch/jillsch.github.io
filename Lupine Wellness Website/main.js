$('.showMenu').on('click', function () {
  $('.menu-modal-background').css("display", "flex").hide().fadeIn();
  $('.hamburger').css("display", "none").hide().fadeOut();
});

$('#close-menu').on('click', function () {
  $('.menu-modal-background').fadeOut();
  $('.hamburger').css("display", "none").hide().fadeIn();
});
