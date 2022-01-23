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
    $("body").on("click", ".menu-open-button", function () {
      $(".menu-open-button,.nav").toggleClass("active");
    });

    $("body").on("click", ".sub_nav_btn", function () {
      $(".sub_nav_btn,.sub_nav").toggleClass("active");
    });

    $("body").on("click", ".redirect", function () {
      $(".menu-open-button,.nav,.sub_nav_btn,.sub_nav").removeClass("active");
    });
  },
  anchorHandler: function () {
    var $body = window.opera
      ? document.compatMode == "CSS1Compat"
        ? $("html")
        : $("body")
      : $("html,body");
    $("#tab").on("click", "li", function () {
      var anchor = $(this).attr("data-anchor");
      if (anchor) {
        console.log(anchor);
        $body.animate({ scrollTop: $(`#${anchor}`).offset().top - 70 }, 700);
      }
    });
  },
};

$(function () {
  index.slickInit();
  index.navHandler();
  index.anchorHandler();
});
