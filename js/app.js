$(function () {
    let $menu_popup = $('.menu-popup');

    $('.menu-triger, .menu-close').click(function () {
        $menu_popup.slideToggle(300, function () {
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            }
        });
        return false;
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav-menu-toggle').length) {
            $('body').removeClass('body_pointer');
            $menu_popup.slideUp(300);
        }
    });
});
