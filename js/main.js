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

// $(function(){

//     $(document).ready(function () {
//     $('#toggle').click(function() {
//         $(this).toggleClass('active');
//         $('#fullnav').toggleClass('open');
//       });
//       });
// })

// Product Reviews

$(document).ready(function(){
    $('.ct-slick-homepage').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });
});
