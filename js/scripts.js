jQuery(document).ready(function() {

    var pos = $(window).scrollTop();
    setScreen(pos);
});

var trigger1 = $("#trigger1").offset().top - $(window).height();
var trigger1_hit = false;

$(window).scroll(function() {
    var pos = $(window).scrollTop();
    setScreen(pos);
});

function setScreen(pos) {

    if (pos > trigger1) {

       if (!trigger1_hit)  {
         trigger1_hit = true;

         // move to state 2

         to2from1();

         console.log('we hit trigger1');
       }

    } else {

      if (trigger1_hit)  {
        trigger1_hit = false;

        // return to state 1

        to1from2();

        console.log('reset it');
      }

    }

}

function to2from1() {
    $(".screen").removeClass("screen-1");
    $(".screen").addClass("screen-2");
}

function to1from2() {
    $(".screen").removeClass("screen-2");
    $(".screen").addClass("screen-1");
}
