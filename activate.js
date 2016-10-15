
var CarLot = (function(oldIife){
    var currentSelection = "";
    var containerActivate = document.getElementsByClassName("car_card");
    var userInput = document.getElementById("input");
    var currentDiv; /// william showed me this

      oldIife.activateEvents = function (){
        for (var i = 0; i < containerActivate.length; i++) {
            containerActivate[i].addEventListener("click", function(e){
              console.log(e);
              for (var j = 0; j < containerActivate.length; j++) {
                containerActivate[j].classList.remove("on-click");
              }
              e.currentTarget.classList.add("on-click");
              currentSelection = e.target;
              userInput.focus();
            });
            console.log(currentSelection)

         userInput.addEventListener('keyup', function(go) {
          if (currentSelection) {
            var get = document.getElementById('description').innerHTML
            // currentSelection.querySelector('.description').innerHTML = this.value;
            get = go.currentTarget.children;

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

// the click event should set the current div to whatever you click - can get access to description here
// you an set that to the currentDiv or something like this
//- notes from Will
//keyup event should edit that currentDiv description






