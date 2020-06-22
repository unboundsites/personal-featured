$('.profile-info').on('click', function() {
  $('.photo-instructions').addClass('open');
});

$('.instructions-close').on('click', function() {
  $(this).parent().removeClass('open');
});