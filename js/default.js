$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1.5,
    });



    /*----네비게이션 -> lnb 오픈----*/
    $(function () {
        $(".nav .gnb .tit").click(function () {
            $(".lnb").stop().slideUp();
            $(this).next(".lnb").stop().slideDown();
        });
    });
    /*----네비게이션 오픈 and close----*/
    $(".nav_btn_area img").click(function () {
        $(".nav").css({ display: "block" });
        clearInterval(timer);
    });

    $(".nav_close").click(function () {
        $(".lnb").stop().slideUp();
        $(".nav").css({ display: "none" });
        timer = setInterval(fadeInOut, 4000);

    });

    /*----검색 open & close----*/
    $(function () {
        $(".search").click(function (e) {
            e.preventDefault();
            $(".search_input").toggle();
            //return false;
        });
    });

    $(".search_go").click(function () {
        $(".search_input").css({ display: "none" });
        timer = setInterval(fadeInOut, 4000);
    });

    /*운영방침*/
    $(function () {
        $(".policy").click(function (e) {
            e.preventDefault();
            $(".policy_area .close_menu").toggle();
            //return false;
        });
    });

    /* 패밀리 사이트 */
    $(function () {
        $(".family").click(function (e) {
            e.preventDefault();
            $(".family_area .close_menu").toggle();
            //return false;
        });
    });

    /*header 고정*/
    var $header = $('.header_top');

    $(window).scroll(function () {
        var $currentsct = $(this).scrollTop();
        if ($currentsct > 0) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });
})

