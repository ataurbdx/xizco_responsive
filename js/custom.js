$(function () {

    $(".search_bar").click(function () {
        
        $(".navbar-nav").toggleClass("menu_hide");
        
        $(".menu_search").toggleClass("search_active");
        

    });
    
    
    
    
    
    
    
    
    $(".slider_wrap").slick({
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });
    
    $(".review_slide").slick({
        arrows: false,
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });
    
    $('.faq_header').on('click',function(){
        $('.faq_header button').removeClass('active');
        $(this).children('button').addClass('active');
    });
    
    var mixer = mixitup('.mixitup_wrap');
    
    $('.work_item').venobox({
        share: ['']
    });
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


});
