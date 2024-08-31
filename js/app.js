// CAROUSEL

$(document).ready(function () {
   var $carousel = $(".carousel");
   var $items = $(".carousel li");
   var $itemWidth =
      $items.first().outerWidth(true) +
      (isNaN(window.innerWidth) ? 0 : 0.017 * window.innerWidth);

   $(".button").click(function () {
      $carousel.css("transform", "translateX(" + -$itemWidth + "px)");
      setTimeout(function () {
         $carousel.append($(".carousel li").first());
         $carousel.css("transition", "none");
         $carousel.css("transform", "translateX(0)");
         setTimeout(function () {
            $carousel.css("transition", "transform 0.5s ease-in-out");
         }, 50);
      }, 500);
   });
});
