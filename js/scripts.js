jQuery(document).ready(function() {
});

var trigger1 = $("#trigger1").offset().top - $(window).height();
var trigger1_hit = false;

$(window).scroll(function() {

  var pos = $(window).scrollTop();

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

      $(".image").fadeIn();

      console.log('reset it');
    }

  }

});

function to2from1() {
  $(".image").fadeOut();
}

function to1from2() {
  $(".image").fadeIn();
}
