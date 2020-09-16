$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut();
});

/* Team */
$(function () {
  $("#team-members").owlCarousel({
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

/* Portfolio */

/* Isotope */
$(window).on("load", function () {
  // Initialize Isotopoe

  $("#isotope-container").isotope({});
  //filter code

  $("#isotope-filters").on("click", "button", function () {
    //get filter value
    var filterValue = $(this).attr("data-filter");
    //filter items
    $("#isotope-container").isotope({
      filter: filterValue,
    });
    //active
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//Magnific Popup

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", //child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

//Testimonial Section
$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
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
