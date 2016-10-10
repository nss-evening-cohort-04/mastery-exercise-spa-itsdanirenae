
var CarLot = (function(event){
var currentSelection = "";
  var containerActivate = document.getElementsByClassName("border");

  var activateEvents = function (){
    console.log("hey");
    for (var i = 0; i < containerActivate.length; i++) {
    containerActivate[i].addEventListener("click", function(event){
      containerActivate.currentTarget.classList.add("on-click");
});
   }
  }
  return event





})(CarLot || {});







