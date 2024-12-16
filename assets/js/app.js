$(document).ready(function(){
    $('.logo-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                autoplay:true,
                speed: 300,
                autoplaySpeed: 2000,
                cssEase: 'linear',
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                autoplay:true,
                speed: 300,
                autoplaySpeed: 2000,
                cssEase: 'linear',
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay:true,
                speed: 300,
                autoplaySpeed: 2000,
                cssEase: 'linear',
              }
            }
        ]
    });
});

  document.getElementById('navicon').onclick = function() {
    this.classList.toggle('open');
}