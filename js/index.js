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
  lbHandler: function () {
    $("body").on("click", "a.func_item", function () {
      var item = $(this).attr("data-item");
      console.log(item);
      $(".lb_wrapper").fadeIn(300, function () {
        $(`.${item}`).show();
      });
    });
    $("body").on("click", ".lb_wrapper", function () {
      $(".lb_wrapper").fadeOut(300, function () {
        $(".lb").hide();
      });
    });

    $("body").on("click", ".lb", function (e) {
      e.stopPropagation();
    });

    $("body").on("click", ".lb_tabs li", function (e) {
      e.stopPropagation();
      var memberStatus = $(this).attr("data-member");
      var $ele2 = $('input[name="password2"], input[name="email"]');
      $(this).addClass("active").siblings("li").removeClass("active");
      $(".status").hide();
      $(`.${memberStatus}`).show();

      if (memberStatus === "signIn") {
        $ele2.addClass("hidden");
      } else {
        $ele2.removeClass("hidden");
      }
    });
  },
};

$(function () {
  index.slickInit();
  index.navHandler();
  index.anchorHandler();
  index.lbHandler();
});
