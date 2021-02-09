$(document).ready(function(){
    $('.promo__slider').slick({
        arrows: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        lazyLoad: 'ondemand',
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: true
                }
            }
        ]
    });
});