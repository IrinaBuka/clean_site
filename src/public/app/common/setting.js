$('.main-slider').slick({
    infinite: true,
    arrows: true,
    prevArrow: "<span class='btn-arrow prev'></span>",
    nextArrow: "<span class='btn-arrow next'></span>",
});
$('.mini-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    centerMode: false,
    prevArrow: "<span class='btn-arrow prev'></span>",
    nextArrow: "<span class='btn-arrow next'></span>",
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.dining-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dotsClass: 'dining-dots'
});

$('.info-event-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    dotsClass: 'dining-dots',
    prevArrow: "<span class='btn-arrow prev'></span>",
    nextArrow: "<span class='btn-arrow next'></span>"
});
$('.sponsors-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    centerMode: false,
    prevArrow: "<span class='btn-arrow prev'></span>",
    nextArrow: "<span class='btn-arrow next'></span>",
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
$('.things-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: "<span class='btn-arrow prev'></span>",
    nextArrow: "<span class='btn-arrow next'></span>",
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
$(document).ready(function () {
    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
            function () {
                currentHeight = $(this).height();
                if (currentHeight > tallestcolumn) {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }

    $(document).ready(function () {
        if ($(window).width() > 991) {
            setEqualHeight($(".welcome-section .block"));
            setEqualHeight($(".dining .block"));
        }
    });
});
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
$('#visitors-num').animateNumber(
    {
        number: $('#visitors-num').data('to'),
        numberStep: comma_separator_number_step
    }
);
$('#parks').animateNumber({number: 6});
$('#events').animateNumber({number: 1200});
new WOW().init();
$("#mygallery").justifiedGallery({
    rowHeight: 180,
    lastRow: 'nojustify',
    margins: 6
});