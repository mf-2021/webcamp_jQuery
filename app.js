$(function(){
  // $(".box1").show();
  // $(".box1").css({"background-color": "#0000FF"});
  // $(".box1").hide();
  $(".box1").slideDown(function(){
    $(".box1").css({
      "background-color": "#0000FF",
      "height": "100px",
      "widht": "200px"
    }).slideUp();
  });
});