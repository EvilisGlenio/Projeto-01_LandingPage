$(function(){

    //valor padrão da barra de progresso
    var currentValue = 0;
    //variável para verificar se o mouse estára pressionado ou não
    var isDrag = false;
    var preco_maximo = 500000;
    var preco_atual = 0;

    //Quando o botão for pressionado, faça algo...
    $('.price-button').mousedown(function(){
        isDrag = true;
    })

    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection();
    })

    $('.bar-price').mousemove(function(e){
        if(isDrag){

            disableTextSelection();

            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;

            if(mouseX < 0)
                mouseX = 0;
            if(mouseX > elBase.width())
                mouseX = elBase.width();


            $('.price-button').css('left',(mouseX-20)+'px');
            
            currentValue = (mouseX / elBase.width()) * 100;

            $('.fill-price').css('width',currentValue+'%');

            //Ajustar o formato do preço
            preco_atual = (currentValue/100) * preco_maximo;
            $('.preco_pesquisa').html('R$'+preco_atual);
            
        }
    })

    function disableTextSelection(){
        $("body").css("-webkit-user-select","none");
        $("body").css("-moz-user-select","none");
        $("body").css("-ms-user-select","none");
        $("body").css("-o-user-select","none");
        $("body").css("user-select","none");
    }
    function enableTextSelection(){
        $("body").css("-webkit-user-select","auto");
        $("body").css("-moz-user-select","auto");
        $("body").css("-ms-user-select","auto");
        $("body").css("-o-user-select","auto");
        $("body").css("user-select","auto");
    }

})  