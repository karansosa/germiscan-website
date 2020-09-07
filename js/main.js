$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("darkHeader");
    }
});

$(document).ready(function(){
    $('.ct-slick-homepage').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });
});

