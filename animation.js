$(function() {
    var numberOfStars = 20;
    for (var i = 0; i < numberOfStars; i++) {
        $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
    }
    // Additional animation functions can be added here
});
