$(function(){

    var imgShow = 3;
    var maxIndex = Math.ceil($('.img-single-wraper').length/3) - 1;
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();

    function initSlider(){
        //Função que determinará o tamanho da janela baseado na quantidade de imagens, tendo em vista que cabe apenas 3 na tela, o escesso ficara oculto
        var amount = $('.img-single-wraper').length *33.3;

        var elScroll = $('.galeria-img-wrapper');
        var elSingle = $('.img-single-wraper');

        elScroll.css('width',amount+'%');
        elSingle.css('width',33.3*(100/amount)+'%');
    }

    function navigateSlider(){
        $('.nav-arrow-right').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.img-single-wraper').eq(curIndex*3).offset().left - $('.galeria-img-wrapper').offset().left;
                $('.wrapper-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                //console.log('The End');
            }
        });
        $('.nav-arrow-left').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.img-single-wraper').eq(curIndex*3).offset().left - $('.galeria-img-wrapper').offset().left;
                $('.wrapper-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                //console.log('The End');
            }
        })
    }

    function clickSlider(){
        $('.img-single-wraper').click(function(){
            $('.img-single-wraper').css('background-color','transparent');
            $(this).css('background-color','rgb(210,210,210)');
            var img = $(this).children().css('background-image');
            $('.car').css('background-image',img);
        })

        $('.img-single-wraper').eq(0).click();
    }

})