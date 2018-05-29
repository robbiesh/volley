jQuery(document).ready(function() {

    var pos = $(window).scrollTop();
    setScreen(pos);

    // $(".nav-pointer").css("opacity", 1);

});

var prev = "";
var curr = "";

var screen2_top = $("#screen2").offset().top - $(window).height();
var screen2_bottom = $("#screen2").offset().top;

var screen3_top = $("#screen3").offset().top - $(window).height();
var screen3_bottom = $("#screen3").offset().top;

var screen4_top = $("#screen4").offset().top - $(window).height();
var screen4_bottom = $("#screen4").offset().top;

$(window).resize(function() {
  screen2_top = $("#screen2").offset().top - $(window).height();
  screen2_bottom = $("#screen2").offset().top;

  screen3_top = $("#screen3").offset().top - $(window).height();
  screen3_bottom = $("#screen3").offset().top;

  screen4_top = $("#screen4").offset().top - $(window).height();
  screen4_bottom = $("#screen4").offset().top;
});

$(window).scroll(function() {
    var pos = $(window).scrollTop();
    setScreen(pos);
});

function setScreen(pos) {

    if (pos <= screen2_top) {

      if (curr !== "screen-1")  {
        prev = curr;
        curr = "screen-1";

        if (prev == "screen-2") {
          $(".screen").addClass("back");
        } else {
          $(".screen").removeClass("back");
        }

        $(".nav-pointer").css("left", $(".nav--screen-1").position().left - 25);

        $(".screen").addClass(curr);
        $(".screen").removeClass("screen-2 screen-3 screen-4");
      }

    }

    else if (pos > screen2_top && pos < screen2_bottom) {

       if (curr !== "screen-2")  {
         prev = curr;
         curr = "screen-2";

         if (prev == "screen-3") {
           $(".screen").addClass("back");
         } else {
           $(".screen").removeClass("back");
         }

         $(".nav-pointer").css("left", $(".nav--screen-2").position().left - 25);

         $(".screen").addClass(curr);
         $(".screen").removeClass("screen-1 screen-3 screen-4");
       }

    }

    else if (pos > screen3_top && pos < screen3_bottom) {

      if (curr != "screen-3")  {

        prev = curr;
        curr = "screen-3";

        if (prev == "screen-4") {
          $(".screen").addClass("back");
        } else {
          $(".screen").removeClass("back");
        }

        $(".nav-pointer").css("left", $(".nav--screen-3").position().left - 25);

        $(".screen").addClass(curr);
        $(".screen").removeClass("screen-1 screen-2 screen-4");

      }
    }

    else if (pos > screen4_top && pos < screen4_bottom) {

      if (curr != "screen-4")  {

        prev = curr;
        curr = "screen-4";

        $(".nav-pointer").css("left", $(".nav--screen-3").offset().left - 30);

        $(".screen").addClass(curr);
        $(".screen").removeClass("screen-1 screen-2 screen-3");

      }
    }

}

function to2from1() {
    $(".screen").removeClass("screen-1");
    $(".screen").addClass("screen-2");

    $(".screen").removeClass("back");
}

function to1from2() {
    $(".screen").removeClass("screen-2");
    $(".screen").addClass("screen-1");

    $(".screen").addClass("back");
}

function to3from2() {
    $(".screen").removeClass("screen-2");
    $(".screen").addClass("screen-3");
}

function to2from3() {
  $(".screen").removeClass("screen-3");
  $(".screen").addClass("screen-2");
}

function menuToggle() {
  var element = document.getElementById("toggle-icon");
  element.classList.toggle("open");

  $(".mobile-menu").slideToggle();
}
