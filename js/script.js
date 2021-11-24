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
  var midnight = ("Good evening! You&rsquo;re still awake &#128064;");

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

  var $boxes = $('.grid-item');
  $boxes.hide();

  var $grid = $('.grid-masonry');

  $grid.imagesLoaded( function() {
    $boxes.fadeIn(1000);

    $grid.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      percentPosition: true,
      
    });    
  });
});


$(document).ready(function() {
  //list of pages in order
  const PortfolioPages = [
    '/project-palette.html',
    '/lettering.html',
    '/project-cheers.html',
    '/project-wonder.html',
    '/editorial.html',
    '/project-az-20gift.html',
    '/project-aza2021.html',
  ];
  
  //get current path
  var path = window.location.pathname;
  //get current page number
  var CurrentPage=0;
      for (let i = 0; i < PortfolioPages.length; i++) {
         if (PortfolioPages[i] === path){
          CurrentPage = i;
          };    
      };
  
  $( "#demo" ).html("hellllo");
  
  nexturl = PortfolioPages[CurrentPage - 1]
  prevurl = PortfolioPages[CurrentPage + 1]
  $('.next').attr('href', nexturl);
  $('.prev').attr('href', prevurl);
  
  //document.getElementById("demo").innerHTML = PortfolioPages;
    });