//Clicar e ir direto para a div de contato com base no atributo GoTo

var directory = '/Danki Code/WebMaster/Projetos/Projeto 05 - Site Institucional (Loja de Carros)/';

$('[goto=contato]').click(function(){
    location.href=directory+'index.html?contato';
    return false;
})

checkUrl();

function checkUrl(){
    var url = location.href.split('/');
    var curPage = url[url.length-1].split('?');

    if(curPage[1] != undefined && curPage[1] == 'contato'){
        $('header nav a').css('color','black');
        $('footer nav a').css('color','white');
        $('[goto=contato]').css('color','#EB2D2D');
        $('html,body').animate({'scrollTop':$('#contato').offset().top});
    }
}