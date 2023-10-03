$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.cont1').offset().top / 2) {
            $('.cont1 .left_line').css('left', '0');
            $('.cont1 .left_cont').css('left', '0');
        } else {
            $('.cont1 .left_line').css('left', '-100%');
            $('.cont1 .left_cont').css('left', '-100%');
        };
        if ($(window).scrollTop() > $('.cont1').offset().top / 2 + 250) {
            $('.cont1 .right_cont').css('right', '0');
            $('.cont1 .right_line').css('right', '0');
        } else {
            $('.cont1 .right_cont').css('right', '-100%');
            $('.cont1 .right_line').css('right', '-100%');
        };
    });

    var listArray = ["1", "2", "3", "4", "5"]; //pagination에 나타나는 텍스트
    var swiper = new Swiper('.mySwiper', {
        // Optional parameters
        loop: true, 
        slidesPerView: 1,
        
        autoplay: {
            delay: 10000,//animation과 시간 맞춰줘야함
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true', 
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + listArray[index] + '<i></i>' + '<b></b>' + '</span>';
            },
        },
    })

    $('.play').hide();
    $('.pause').click(function () {
        swiper.autoplay.stop();
        $('.pause').hide();
        $('.play').fadeIn();
    });
    $('.play').click(function () {
        swiper.autoplay.start();
        $('.play').hide();
        $('.pause').fadeIn();
    });

    $('.cont2 .item').mouseenter(function(){
        $('.cont2 .item').removeClass('on');
        $(this).addClass('on');
    });
    $('.cont2 .item1').mouseenter(function(){
        $('.cont2 .item1').css('width', '720px');
        $('.cont2 .item2').css({
            'width': '240px',
            'left': '720px'
        });
        $('.cont2 .item3').css({
            'width': '240px',
            'left': '960px'
        });
        $('.cont2 .item4').css({
            'width': '240px',
            'left': '1200px'
        });
    });
    $('.cont2 .item2').mouseenter(function(){
        $('.cont2 .item1').css('width', '240px');
        $('.cont2 .item2').css({
            'width': '720px',
            'left': '240px'
        });
        $('.cont2 .item3').css({
            'width': '240px',
            'left': '960px'
        });
        $('.cont2 .item4').css({
            'width': '240px',
            'left': '1200px'
        });
    });
    $('.cont2 .item3').mouseenter(function(){
        $('.cont2 .item1').css('width', '240px');
        $('.cont2 .item2').css({
            'width': '240px',
            'left': '240px'
        });
        $('.cont2 .item3').css({
            'width': '720px',
            'left': '480px'
        });
        $('.cont2 .item4').css({
            'width': '240px',
            'left': '1200px'
        });
    });
    $('.cont2 .item4').mouseenter(function(){
        $('.cont2 .item1').css('width', '240px');
        $('.cont2 .item2').css({
            'width': '240px',
            'left': '240px'
        });
        $('.cont2 .item3').css({
            'width': '240px',
            'left': '480px'
        });
        $('.cont2 .item4').css({
            'width': '720px',
            'left': '720px'
        });
    });

});// jquery end