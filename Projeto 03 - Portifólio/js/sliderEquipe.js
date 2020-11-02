$(function(){
    
    var amount;
    var delay = 3000;
    //Posição atual
    var curIndex = 0;

    initSlider();
    autoPlay();

    function initSlider(){
        //pegar a quantidade de perfis que há
        amount = $('.team-single-wrapper').length;
        //para calcular o tamanho da janela conforme a quantidade de perfis que há
        var sizeContainer = 100 * amount;
        //para calcular o tamanho de cada janela
        var sizeBoxSingle = 100 / amount;
        $('.team-single-wrapper').css('width',sizeBoxSingle+'%');
        $('.scroll-wrapper').css('width',sizeContainer+'%');

        for( var i = 0; i < amount; i++){
            if(i == 0){
                $('.slide').append('<span style="background-color:rgb(170,170,170);"></span>');
            }else{
                $('.slide').append('<span></span>');
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            
            if(curIndex == amount){
                curIndex = 0;
            }
            goToSlider(curIndex);
            
        },delay);
    }

    function goToSlider(curIndex){
        var offSetX = $('.team-single-wrapper').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;

        
        $('.slide span').css('background-color','rgb(200,200,200)');
        $('.slide span').eq(curIndex).css('background-color','rgb(150,150,150)');
        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0});
    })

})