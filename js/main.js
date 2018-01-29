$(document).ready(function () {
    scrolled();
});

$(window).scroll(function () {
    scrolled();
});

function scrolled() {
    var navHeight = $('#main-nav').outerHeight();
    var scrolled = $(window).scrollTop();

    if (scrolled > navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}
$("#navbarNav li a").click(function (event) {
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
});


$(document).ready(function () {
    smoothScroll();
});

function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {
                var baseMinScrollTime = 800,
                    baseMaxScrollTime = 800;

                var docHeight = $(document).height(),
                    triggerTop = $(this).offset().top,
                    targetTop = $target.offset().top;

                var scrollProportion = (targetTop - triggerTop) / docHeight,
                    relativeTime = ((baseMaxScrollTime - baseMinScrollTime) * scrollProportion) + baseMinScrollTime,
                    // Create inverse relationship (quicker the further we scroll)
                    scrollTime = -1 * (1 - relativeTime);

                $('html, body').animate({
                    scrollTop: targetTop - 10
                }, scrollTime);
            }
        }
    });
}
