$(document).ready(function () {
    scrolled();
    smoothScroll();
});

$(window).scroll(function () {
    scrolled();
});


function scrolled() {
    const navHeight = $('#main-nav').outerHeight();
    const scrolled = $(window).scrollTop();

    if (scrolled > navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}
$("#navbarNav li a").click(function (event) {
    const toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
});

function smoothScroll() {
    $('a[href*="#"]:not([href="#carouselExampleIndicators"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 700, function () {

                });

                //Closes responsive menu when a scroll trigger link is clicked
                const toggle = $(".navbar-toggler").is(":visible");
                if (toggle) {
                    $(".navbar-collapse").collapse('hide');
                }
                return false;
            }
        }
    });
}

function hover() {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
}
