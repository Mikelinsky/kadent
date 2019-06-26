$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        onInitialized: displaySocialMedia,
        onTranslate: displaySocialMedia
    });

    $(".owl-dots").addClass("container");

    function displaySocialMedia() { 
        $(".owl-dots").append('<div class="header__socialmedia-box"><a href="#"><img src="img/facebook.png" alt="facebook"></a><a href="#"><img src="img/twitter.png" alt="twitter"></a><a href="#"><img src="img/instagram.png" alt="instagram"></a></div>');
    }
});