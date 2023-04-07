$(document).ready(function () {
  $(".reviews-list").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
    ],

    mobileFirst: true,
  });
});
