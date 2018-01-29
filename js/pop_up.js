$('.skills-item')
    .hover(function () {
        $(this).find('.popuptext').addClass('showInfo')
    })
    .mouseleave(function () {
        $(this).find('.popuptext').removeClass('showInfo')
    });
