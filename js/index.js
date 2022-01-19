new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function () {
    return {
      $body: null,
      currentLb: null,
      menuIsOpen: false,
      lbData: {
        lee: {
          name: "Terry Lee",
          slogan: "〝廚藝的精進，來自文化的尋根。〞",
          txt1: "Terry Lee 為五星級飯店主廚出身，擁有紮實的正統日料歷練。",
          txt2: "對日本料理的熱愛，促使他潛心追求最原始的日料之美，同時亦不忘推陳出新；如何能在嚴守初心之餘突破傳統，賦予日本料理新生命，是他心心念念的課題。",
        },
        dang: {
          name: "Patrick Dang",
          slogan: "〝每道料理，都是旅程的記憶。〞",
          txt1: "Patrick Dang 經歷相當豐富。他在香港出生，於澳洲成長，足跡遍布半個地球，擔任過香港、上海、墨西哥、澳洲、美國等多國知名餐廳的行政主廚與顧問。",
          txt2: "於他而言，料理是將他職業生涯的精華，呈現在饕客面前的絕佳方式；更是將旅居各地積累而來的靈感與啟發，化為味蕾上層出不窮驚喜的極致藝術。",
        },
      },
    };
  },
  computed: {
    // get only
    main_current_list: function () {
      const current_arr = this.banner_menu.filter((item) => {
        return item.name === this.root_current; // 取得陣列中雙數的物件
      });
      return current_arr && current_arr[0];
    },
  },
  watch: {
    // watching nested property
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$body = window.opera
        ? document.compatMode == "CSS1Compat"
          ? $("html")
          : $("body")
        : $("html,body");
      // this.initRipples();
      this.initTlt();
      this.initScrollMagic();
      // 等vue init後，再出現
      $("body").animate({ opacity: 1, background: "#22395b" }, 1200);
    });
  },
  methods: {
    initRipples: function () {
      try {
        $("#kv").ripples({
          interactive: false,
          dropRadius: 80,
          perturbance: 0.006,
          resolution: 96,
        });
      } catch (e) {
        console.error("error");
      }
      var $el = $("#kv");
      var dropsTimer = setInterval(function () {
        console.log($el);
        var x = Math.random() * $el.outerWidth() + 50;
        var y = Math.random() * $el.outerHeight();
        $el.ripples("drop", x, y, 80, 0.02 + 0.1 * Math.random());
      }, 60);

      setTimeout(function () {
        clearInterval(dropsTimer);
      }, 421);

      setTimeout(function () {
        $el.ripples("pause");
        console.log("18");
      }, 18000);
    },
    initTlt: function () {
      $(".tlt").textillate({
        autoStart: false,
        in: { effect: "fadeIn", delay: 60 },
      });
      $(".tlt_kv").textillate({
        autoStart: false,
        in: { effect: "fadeIn", delay: 100 },
      });
    },
    initScrollMagic: function () {
      var controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene().addTo(controller);

      // 山的滾動視差
      var m1 = new ScrollMagic.Scene({
        triggerElement: "#menu",
        duration: 800,
      })
        .setTween("#m1", { marginTop: "-50px" })
        .addTo(controller);

      var m2 = new ScrollMagic.Scene({
        triggerElement: "#tasty",
        duration: 800,
      })
        .setTween("#m2", { marginTop: "-50px" })
        .addTo(controller);

      // nav底色
      var header = new ScrollMagic.Scene({
        triggerElement: "#chef",
        offset: 200,
        duration: 200,
      })
        .setTween("#header", { background: "#000", top: 0 })
        .addTo(controller);

      // 訂位背景放大
      var reserv = new ScrollMagic.Scene({
        triggerElement: "#for_bg",
        triggerHook: "onEnter",
      })
        .setClassToggle("#for_bg", "enlarge")
        .addTo(controller);

      // 每個section的動態
      $(".animate_txt").each(function (index, elem) {
        const triggerHook = $(elem).attr("data-delay");
        const fadeUpSlow = $(elem).attr("data-subTitle");
        const isKv = $(elem).attr("data-kvTitle");
        new ScrollMagic.Scene({
          triggerElement: elem,
          offset: 100,
          triggerHook: triggerHook || "onEnter",
        })
          .addTo(controller)
          .setClassToggle(elem, fadeUpSlow || isKv ? "" : "fadeInUp")
          .reverse(false)
          .on("enter", function (event) {
            setTimeout(
              function () {
                if (isKv) {
                  $(elem).addClass("fadeInKv");
                } else {
                  $(elem).addClass("fadeInUp");
                }
              },
              isKv ? 4000 : 2400
            );
          });
      });

      // 每個標題的動態
      $(".tlt, .tlt_kv").each(function (index, elem) {
        new ScrollMagic.Scene({
          triggerElement: elem,
          offset: 0,
          triggerHook: "onEnter",
        })
          .addTo(controller)
          .reverse(false)
          .on("enter", function (event) {
            $(elem).textillate("start").addClass("show");
          });
      });
    },
    menuHandler: function () {
      this.menuIsOpen = !this.menuIsOpen;
    },
    lbHandler: function (name) {
      this.currentLb = name;
      if (name === null) {
        $("body, html").removeClass("scrollHide");
      } else {
        $("body, html").addClass("scrollHide");
      }
      this.menuIsOpen = false;
    },
    scrollHandler: function (section) {
      this.$body.animate({ scrollTop: $(`#${section}`).offset().top }, 1000);
      this.menuIsOpen = false;
    },
  },
});
