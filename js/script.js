// penggunaan scrolltotop dan memberikan effect shadow pada navigasi ketika halaman di scroll 
$(function () {
    var shrinkHeader = 100;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('nav').addClass('shrink');
            $('#scrolltop').addClass('show-scroll');
        } else {
            $('nav').removeClass('shrink');
            $('#scrolltop').removeClass('show-scroll');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset;
    }
});