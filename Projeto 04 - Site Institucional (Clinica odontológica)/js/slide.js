$(function(){

    $('.mosaico .wrapper-mosaico').slick({
        centerMode: false,
        slidesToShow:6,
        arrows: false,
        responsive:[

            {
                breakpoint:768,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow:3
                }
            },
            {
                breakpoint: 580,
                settings:{
                    arrows: false,
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 380,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.tratamentos .center').slick({
        arrows:false,
        centerMode: false,
        slidesToShow: 3,
        infinite: false,
        responsive:[
            
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    slidesToShow: 2,
                    infinite: false,
                    centerMode: false,
                    dots:true
                }
            },
            {
                breakpoint: 480,
                settings:{
                    arrows:false,
                    slidesToShow: 1,
                    infinite: false,
                    centerMode: false,
                    dots:true
                }
            }
        ]
    });

    $('.videos .wrapper-box').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: false,
        centerMode: false,
        dots:true
    });


    $('.depoimentos .center').slick({
        arrows:false,
        slidesToShow: 1,
        infinite: false,
        centerMode: false,
        dots:true
    });
    
})