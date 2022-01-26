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
  $body: $("body"),
  $lb: $(".lb"),
  navHandler: function () {
    index.$body.on("click", ".menu-open-button", function () {
      $(".menu-open-button,.nav").toggleClass("active");
    });

    index.$body.on("click", ".sub_nav_btn", function () {
      $(".sub_nav_btn,.sub_nav").toggleClass("active");
    });

    index.$body.on("click", ".redirect", function () {
      $(".menu-open-button,.nav,.sub_nav_btn,.sub_nav").removeClass("active");
    });
  },
  anchorHandler: function () {
    var $body = window.opera
      ? document.compatMode == "CSS1Compat"
        ? $("html")
        : index.$body
      : $("html,body");
    $("#tab").on("click", "li", function () {
      var anchor = $(this).attr("data-anchor");
      if (anchor) {
        $body.animate({ scrollTop: $(`#${anchor}`).offset().top - 70 }, 700);
      }
    });
  },
  lbHandler: function () {
    index.$body.on("click", "a.func_item", function () {
      var item = $(this).attr("data-item");
      index.$lb.hide();
      $(".lb_wrapper").fadeIn(200);
      $(`.${item}`).show();
    });
    index.$body.on("click", ".lb_wrapper", function () {
      $(".lb_wrapper").fadeOut(200, function () {
        index.$lb.hide();
        index.$lb.find("input:not([type='button'])").val("");
        $(".search_list").removeClass("show");
        $(".fake_select").find("img").removeClass("active");
      });
    });

    index.$body.on("click", ".lb", function (e) {
      e.stopPropagation();
    });

    index.$body.on("click", ".lb_tabs li", function (e) {
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

    index.$body.on("click", ".fake_select", function (e) {
      $(this).find("img").addClass("active");
      $(".search_list").addClass("show");
    });
    index.$body.on("click", ".search_list li", function () {
      $(".fake_select").find("img").removeClass("active");
      $("input[name='category']").val($(this).html());
      $(".search_list").removeClass("show");
      $(".fake_select").find("img").removeClass("active");
    });
  },
};

$(function () {
  index.slickInit();
  index.navHandler();
  index.anchorHandler();
  index.lbHandler();
});
