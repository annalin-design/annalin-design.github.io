$(function() {
  $("header").load("../common/header.html");
  $("footer").load("../common/footer.html");
});

$(function() {
  var thehours = new Date().getHours();
  var themessage;
  var morning = ("Good morning &#127803;");
  var afternoon = ("Good afternoon &#128075;");
  var evening = ("Good evening &#10024;");
  var midnight = ("You&rsquo;re still awake &#128064;");

  if (thehours >= 0 && thehours < 4) {
    themessage = midnight;

  } else if (thehours >= 4 && thehours < 12) {
    themessage = morning;

  } else if (thehours >= 12 && thehours < 17) {
    themessage = afternoon;

  } else if (thehours >= 17 && thehours < 24) {
    themessage = evening;
  }

  $(".greeting").append(themessage);
});

$(document).ready(function() {


// init Masonry
var $grid = $('.grid-masonry').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true,
  //transitionDuration: 0
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

});

