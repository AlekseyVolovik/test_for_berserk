$(document).ready(function(){
    
    $('.tabs__items').slick({
        adaptiveHeight:true,
        slidesToShow:6,
        infinite:false,
        responsive:[
            {
                breakpoint:1025,
                settings: {
                    slidesToShow:5
                }
            },
            {
                breakpoint:769,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint:560,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint:427,
                settings: {
                    slidesToShow:1
                }
            },
        ]
    });

    $('.reviews').slick({
        infinite: true,
		slidesToShow: 1,
        adaptiveHeight:true,
    });

    $('.tabs__item').on('click', function(){
        $('.tabs__item').removeClass('active');
        $(this).addClass('active');
    })

    $(".menu-icon-wrapper").on("click", function(){
        $(".menu-icon").toggleClass("menu-icon-active");
    });

    $("#menu-icon-wrapper").on("click", function(event){
        event.preventDefault();
    });
});