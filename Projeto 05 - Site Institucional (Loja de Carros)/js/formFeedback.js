$(function(){
  $('form').submit(function(){
      var erro = false;
      var nome = $('[type=text]').val();
      var email = $('[type=email]').val();
      var tel = $('[type=tel]').val();
      var text = $('[name=mensagem]').val();
  resetForm();
      
      if(nome == ''){
          erro = true;
          var el = $('[type=text]');
          el.css('border','1px solid red');
      }
      if(email == ''){
      erro = true;
          var el = $('[type=email]');
          el.css('border','1px solid red');
      }
      if(tel == ''){
      erro = true;
          var el = $('[type=tel]');
          el.css('border','1px solid red');
      }
      if(text == ''){
      erro = true;
          var el = $('[name=mensagem]');
          el.css('border','1px solid red');
      }

  if(erro == false){
      $('.box-sucess').fadeIn(function(){
          setTimeout(function(){
              $('.box-sucess').fadeOut();
          },5000);
      });
      $(this)[0].reset();
  }

      return false;
  })
  function resetForm(){
      $('input[type=text],[type=email],[type=tel],[name=mensagem]').css('border','1px solid #dadada');
      $('p').css('color','#b4b4b4');
  }
})