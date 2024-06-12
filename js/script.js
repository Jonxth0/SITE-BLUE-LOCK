$(document).ready(function(){
    $("#banners ul").bxSlider({
        auto: true,
        mode: 'fade',
        speed: 500,
        pause: 7000,
        controls: false,
        pager: false,
    });

    $('.vid01').each(function(i) {
        var self = this;
        $(this).on('click', function() {
          (self.paused) ? self.play(): self.pause();
        });
        $(this).on('ended', function() {
          bx.goToNextSlide();
        });
      });

   
      $('.container-capas').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }

    });
})