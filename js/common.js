$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.quick').css('bottom', '150px');
            $('.quick_menu').css('bottom', '210px');
            $('.top').fadeIn().css('display', 'flex');
            $('header').addClass('on');
        } else {
            $('.quick').css('bottom', '60px');
            $('.quick_menu').css('bottom', '120px');
            $('.top').fadeOut();
            $('header').removeClass('on');
        };
    });

    $('.quick p').click(function(){
        $('.quick').css('transform', 'rotate(180deg)');
        $('.quick p').stop().hide();
        $('.quick figure').stop().show();
        $('.quick_menu').stop().fadeIn();
    });
    $('.quick figure').click(function(){
        $('.quick').css('transform', 'rotate(0)');
        $('.quick figure').stop().hide();
        $('.quick p').stop().show();
        $('.quick_menu').stop().fadeOut();
    });
    $('.quick_menu a').click(function(){
        $('.quick').css('transform', 'rotate(0)');
        $('.quick figure').stop().hide();
        $('.quick p').stop().show();
        $('.quick_menu').stop().fadeOut();
    });

    $('.top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('header .lang li').click(function () {
        $('header .lang li').removeClass('on');
        $(this).addClass('on');
    });

    $('header').mouseenter(function () {
        $('header .menu_depth2').stop().slideDown();
    });
    $('header').mouseleave(function () {
        $('header .menu_depth2').stop().slideUp();
    });

});// jquery end