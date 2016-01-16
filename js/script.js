$(document).ready(function () {
    var imageHeight = $(".image-height").height();
    $(".item").css('height', imageHeight);
});
$(window).resize(function () {
    var imageHeight = $(".image-height").height();
    $(".item").css('height', imageHeight);
});