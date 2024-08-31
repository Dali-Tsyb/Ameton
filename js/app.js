// CAROUSEL

$(document).ready(function () {
   var $carousel = $(".carousel");
   var $items = $(".carousel li");
   var $itemWidth =
      $items.first().outerWidth(true) +
      (isNaN(window.innerWidth) ? 0 : 0.017 * window.innerWidth);

   $(".button").click(function () {
      $carousel.css("-webkit-transform", "translateX(" + -$itemWidth + "px)");
      $carousel.css("transform", "translateX(" + -$itemWidth + "px)");
      setTimeout(function () {
         $carousel.append($(".carousel li").first());
         $carousel.css("-webkit-transition", "none");
         $carousel.css("transition", "none");
         $carousel.css("-webkit-transform", "translateX(0)");
         $carousel.css("transform", "translateX(0)");
         setTimeout(function () {
            $carousel.css("-webkit-transition", "transform 0.5s ease-in-out");
            $carousel.css("transition", "transform 0.5s ease-in-out");
         }, 50);
      }, 500);
   });
});
