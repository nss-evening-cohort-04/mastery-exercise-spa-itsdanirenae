
var CarLot = (function(oldIife){
    var currentSelection = "";
    var containerActivate = document.getElementsByClassName("car_card");
    var userInput = document.getElementById("input");
    var currentDiv;

      oldIife.activateEvents = function (){
        for (var i = 0; i < containerActivate.length; i++) {
            containerActivate[i].addEventListener("click", function(e){
              console.log(e);
              for (var j = 0; j < containerActivate.length; j++) {
                containerActivate[j].classList.remove("on-click");
                userInput.value = "";
              }
              e.currentTarget.classList.add("on-click");
              currentSelection = e.currentTarget;
              userInput.focus();
            });

         userInput.addEventListener('keyup', function(go) {
          if (currentSelection) {
            var get = document.getElementById('description').innerHTML
            currentSelection.querySelector('.description').innerHTML = this.value;
        }
    });
  }


    userInput.addEventListener('keyup', clearInput);

    function clearInput (e){
      e.preventDefault();
      if(e.keyCode == 13)
      userInput.value = "";
    }
  }

      return oldIife;

})(CarLot || {});








