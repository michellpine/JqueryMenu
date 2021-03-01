
$(document).ready(function () {
    $('li a').hover(function () {
        $(this).addClass('active');
    }, function () {
        $(this).removeClass('active');
    });
});