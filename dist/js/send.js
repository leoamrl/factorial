jQuery(document).ready(function(){
  jQuery('.form').submit(function(){
    var data_form = jQuery( this ).serialize();
    jQuery.ajax({
      type: "POST",
      url: "send.php",
      data: data_form,
      success: function(data)
      {
        $('#feedback_form').addClass('active');
        $('.popup__image').append('<img src="img/success.png">')
        $('.popup__text').append('Obrigado. O seu cadastro foi realizado com sucesso!')
      },
      error: function(data)
      {
        $('#feedback_form').addClass('active');
        $('.popup__image').append('<img src="img/fail.png">')
        $('.popup__text').append('Não conseguimos concluir seu cadastro. Tente novamente!')
      }
    });

    return false;
  });
});