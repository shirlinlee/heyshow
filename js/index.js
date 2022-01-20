const index = {
  slickInit: function () {
    $(".shop_slick").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
    });
  },
  navHandler: function () {
    // $(this).toogleClass("active");
  },
};

$(function () {
  index.slickInit();

  $("body").on("click", ".menu-open-button", function () {
    console.log(123);

    $(this).toggleClass("active");
  });
});
