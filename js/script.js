$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut();
});

/* Team */
$(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 600,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

/*Progress Bars*/

$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          500
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

/* Responsive Tabs*/

$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});
