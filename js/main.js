// Nav Class Add

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".navbar").addClass("darkHeader");
    }
    else
    {
        $(".navbar").removeClass("darkHeader");
    }
});


// Homepage slider

$(document).ready(function(){
    $('.ct-slick-homepage').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });
});

