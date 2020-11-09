$(function(){
    
    var amount = $('.single-wrapper').length;
    //Posição atual
    var curIndex = 0;

    iniciarDepoimentos();
    navegarDepoimentos();

    function iniciarDepoimentos(){
        $('.single-wrapper').hide();
        $('.single-wrapper').eq(0).show();
    }

    function navegarDepoimentos(){
        $('[prev]').click(function(){
            curIndex++;
            if(curIndex >= amount){
                curIndex=0;
            }
            $('.single-wrapper').hide();
            $('.single-wrapper').eq(curIndex).show();
        })
        $('[next]').click(function(){
            curIndex--;
            if(curIndex < 0){
                curIndex = amount-1;
            }
            $('.single-wrapper').hide();
            $('.single-wrapper').eq(curIndex).show();
        })
    }

})