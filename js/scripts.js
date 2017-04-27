$(function() {
  $(".btn").click(function(){
    $(".info").hide();

  var animal = $("#animals").val()

  if(animal === "Turkey") {
    $(".turkey-info").show()
  }
  else if(animal === "Frogs") {
    $(".frog-info").show()
  }
  else {
    $(".bacteria-info").show()
  };

});
});
