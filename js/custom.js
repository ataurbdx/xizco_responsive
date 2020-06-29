$(function () {

    $(".search_bar").click(function () {

        $(".navbar-nav").toggleClass("menu_hide");

        $(".menu_search").toggleClass("search_active");
        $(".menu_height").removeClass("menu_inactive");

        $(".navbar-nav").removeClass("menu_inactive");
        //        $(".menu_height").addClass("menu_inactive");


    });

    $(".menu_icon").click(function () {

        $(".menu_search").removeClass(" search_active");

        $(".navbar-nav").removeClass("menu_hide");

        //        $(".menu_height").toogleClass("menu_active");


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

    $('.faq_header').on('click', function () {
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







    //    COLOR PICKER JS

    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
        el: '.color_picker',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                rgba: true,
                hsla: true,
                hsva: true,
                cmyk: true,
                input: true,
                clear: true,
                save: true
            }
        }
    });
    
    
    pickr.on('change', (color, instance) => {
        var colorCode = color.toHEXA().toString();
        
        document.documentElement.style.setProperty("--themeColor", colorCode)
    console.log(color.toHEXA().toString());
//    console.log(color.toRGBA().toString());
})








});
