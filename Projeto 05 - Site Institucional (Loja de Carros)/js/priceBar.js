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
            //auto explicativa
            preco_atual = formatarPreco(preco_atual);
            //preço sendo atualizado constatemente
            $('.preco_pesquisa').html('R$'+preco_atual);
            
        }
    })

    function formatarPreco(preco_atual){
        //preço terá apenas duas casas decimais após a virgula
        preco_atual = preco_atual.toFixed(2);
        //Separar o preço em 2 arrays, o antes e o depois da vírgula
        preco_arr = preco_atual.split('.');

        var novo_preco = formatarTotal(preco_arr);

        return novo_preco;
    }

    function formatarTotal(preco_arr){
        if(preco_arr[0] < 1000){
            return preco_arr[0]+','+preco_arr[1];
        }else if(preco_arr[0] < 10000){
            return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+','+preco_arr[1]; 
        }else if(preco_arr[0] < 100000){
            return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+','+preco_arr[1]; 
        }else if(preco_arr[0] < 1000000){
            return preco_arr[0][0]+preco_arr[0][1]+preco_arr[0][2]+'.'+preco_arr[0].substr(3,preco_arr[0].length)+','+preco_arr[1]; 
        }
    }

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