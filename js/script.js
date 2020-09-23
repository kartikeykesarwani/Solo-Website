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
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
    },
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

//Stats section
$(function () {
  $(".counter").counterUp({
    delay: 30,
    time: 2000,
  });
});

//Clients Section
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
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

//Google Map

$(window).on("load", function () {
  var addressString = "230 Broadway, NY, New York 10007, USA";
  var myLatlng = { lat: 40.712685, lng: -74.00592 };

  //Render Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatlng,
  });

  //Add Marker

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click to see address",
  });

  //Add Info window
  var infowindow = new google.maps.InfoWindow({
    content: addressString,
  });

  $("marker").on("click", function () {
    infowindow.open(map, marker);
  });
});

/* Show and Hide White Navigation */

$(function () {
  showHideNav();
  $(window).scroll(function () {
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");

      //dark logo

      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      //Show Back to top button
      $(".back-to-top").fadeIn();
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      //Hide back to top btn

      $(".back-to-top").fadeOut();
    }
  }
});

//Smooth scrolling
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    //get section id

    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

/* Animation */

/*Animate on scroll */

$(function () {
  $("#home-heading-1").addClass("animate__animated animate__fadeInDown");
  $("#home-heading-2").addClass("animate__animated animate__fadeInLeft");
  $("#home-text").addClass("animate__animated animate__zoomIn");
  $("#home-btn").addClass("animate__animated animat__zoomIn");
  $("#arrow-down i").addClass(
    "animate__animated animate__fadeInDown animate__infinite"
  );
});
