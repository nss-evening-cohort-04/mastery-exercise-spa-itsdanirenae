
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
              console.log(currentSelection);
              userInput.focus();
            });

         userInput.addEventListener('keyup', function(go) {
          if (currentSelection) {
            var get = document.getElementById('description').innerHTML
            console.log(get);
            currentSelection.querySelector('.description').innerHTML = this.value;
        }
    });
  }


    userInput.addEventListener('keyup', clearInput);

    function clearInput (e){
      e.preventDefault();
      if(e.keyCode == 13)
      userInput.value = "";
      // userInput.blur();
    }
  }

      return oldIife;

})(CarLot || {});








