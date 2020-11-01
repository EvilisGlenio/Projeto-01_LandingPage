$(function(){


    $('form').submit(function(){
        var erro = false;
        var nome = $('[type=text]').val();
        var email = $('[type=email]').val();
        var duvida = $('[name=duvida]').val();
        resetForm();

        if(nome == ''){
            erro = true;
            var el = $('[type=text]');
            el.parent().find('span').html('Por favor insira seu nome.');
            el.css('border','2px solid red');
        }
        if(email == ''){
            erro = true;
            var el = $('[type=email]');
            el.parent().find('span').html('Por favor insira seu E-mail.');
            el.css('border','2px solid red');
        }
        if(duvida == ''){
            erro = true;
            var el = $('[name=duvida]');
            el.parent().find('span').html('Por favor insira sua duvida.');
            el.css('border','2px solid red');
        }

        if(erro == false){
            $('.box-sucess').fadeIn(function(){
                setTimeout(function(){
                    $('.box-sucess').fadeOut();
                }, 5000);
            });
            $(this)[0].reset();
        }
        return false;
    })
    function resetForm(){
        $('input[type=text],[type=email],[name=duvida]').css('border','1px solid #ccc')
        $('span').html('');
    }
})