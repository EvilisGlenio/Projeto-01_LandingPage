$(function(){

    //Eventos do Formulário

    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this))
    })

    $('form').submit(function(e){
        e.stopPropagation();

        var nome = $('[name="nome"]').val();
        var email = $('[name="email"]').val();
        var tel = $('[name="telefone"]').val();

        //Nome
        if(validarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome]'));
        }else if(validarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'));
        }else if(validarTelefone(tel) == false){
            aplicarCampoInvalido($('input[name=tel]'));
        }else{
            $('.box-sucess').fadeIn(function(){
                setTimeout(function(){
                    $('.box-sucess').fadeOut();
                }, 5000);
            });
            $(this)[0].reset();
        }

        return false;
    })

    //Funções de feedback do formulário

    function aplicarCampoInvalido(el){
        el.css('color','red');
        el.css('border','2px solid red');
        el.val('Campo Inválido');
    }
    function resetarCampoInvalido(el){
        el.ccc('color','#ccc');
        el.css('border','1px solid #ccc');
        el.val('');
    }

    //Funções para validações dos campos do formulário

    function validarNome(nome){
        if(nome == ''){
            return false;
        }
        //Pegar a quantidade de palavras separadas por espaços
        var amount = nome.split(' ').length;
        //Pegar os arrays
        var splitStr = nome.split(' ');

        if(amount >= 2){
            for( var i = 0; i < amount; i++){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
            
                }else{
                    return false;
                }
            }
        }else{
            return false;
        }
    }

    function validarEmail(email){
        if(email == '')
            return false;
        if(email.match(/^([a-z0-9_-.]{1,})+@+([a-z.]{1,})$/) == null)
            return false;
        
    }

    function validarTelefone(tel){
        if(tel == '')
            return false;
        if(tel.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/))
            return false;
    
    }

})