// CAROUSEL

$(document).ready(function () {
   let $carousel = $(".carousel");
   let $items = $(".carousel li");
   let $itemWidth =
      $items.first().outerWidth(true) +
      (isNaN(window.innerWidth) ? 0 : 0.017 * window.innerWidth);

   $(".button").click(function () {
      // Сдвиг карусели влево
      $carousel.css("transform", "translateX(" + -$itemWidth + "px)");

      // По завершении анимации
      setTimeout(function () {
         // Перемещаем первый элемент в конец
         $carousel.append($(".carousel li").first());

         // Убираем анимацию и сбрасываем позицию
         $carousel.css("transition", "none");
         $carousel.css("transform", "translateX(0)");

         // Восстанавливаем анимацию после сброса позиции
         setTimeout(function () {
            $carousel.css("transition", "transform 0.5s ease-in-out");
         }, 50);
      }, 500); // Время задержки должно совпадать с длительностью анимации (500 мс)
   });
});
