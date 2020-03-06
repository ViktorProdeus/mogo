"use strict";

$(function () {

  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop()

  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop() + 2

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("main-header--fixed");
    } else {
      header.removeClass("main-header--fixed");
    }
  }



  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;


    $(".main-header__logo").removeClass("site-navigation__link--active");

    $("#nav a").removeClass("site-navigation__link--active");
    $this.addClass("site-navigation__link--active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 900);
  });


  /* Menu nav toggle */
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $("#header").toggleClass("main-header--active");
  });

  $("#nav a").on("click", function (event) {
    event.preventDefault();

    $("#header").removeClass("main-header--active");
  });



  /* Collapse */
  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this);

    $this.toggleClass("accordion__item--active");
  });


  /* Slider */
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
  slidesToScroll: 1
  });
});
