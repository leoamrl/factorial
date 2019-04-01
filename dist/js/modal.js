$('.popup__close').click(function(){
  $('#feedback_form').removeClass("active")
  $('.popup__image').replaceWith('<div class="popup__image"></div>')
  $('.popup__text').replaceWith('<div class="popup__text"></div>')
});
$('.popup__background').click(function(){
  $('#feedback_form').removeClass("active")
  $('.popup__image').replaceWith('<div class="popup__image"></div>')
  $('.popup__text').replaceWith('<div class="popup__text"></div>')
});