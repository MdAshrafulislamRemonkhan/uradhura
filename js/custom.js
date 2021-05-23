$(function(){
    
    //navbar item active;
    $('.navbar .nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //banner slider;
    $('#banner .banner-slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
    });

    //about video venobox;
    $('.venobox').venobox({
        closeColor:'#000000',
        overlayColor:'rgba(226, 62, 56, 0.5)',
        spinner:'wave',
        spinColor:'#353535'
    }); 

    // iteam slider;
    $('#team .team-slider').slick({
        arrows:false,
        slidesToShow:4,
        autoplay:true,
        autoplaySpeed:1000,
    });

    // testomonial slider;
    $('#testomonial .testomonial-slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        dots:true,
    });
});