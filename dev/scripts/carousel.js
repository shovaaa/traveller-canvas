
$(document).ready(function () {
    $('.slick__carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<div class="slick__nextarrow"><i class="fas fa-chevron-right"></i></div>',
        prevArrow: '<div class="slick__prevarrow"><i class="fas fa-chevron-left"></i></div>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
            }
        ]
    });
});









