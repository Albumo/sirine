$(window).scroll(function () {
    const height = $(window).scrollTop();

    if (height > 1) {
        $('.js-header').addClass('is-scroll');
    } else {
        $('.js-header').removeClass('is-scroll');
    }
});