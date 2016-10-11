
var CarLot = (function(oldIife){
    var currentSelection = "";
      var containerActivate = document.getElementsByClassName("car_card");
        var userInput = document.getElementById("input");

      oldIife.activateEvents = function (){
        for (var i = 0; i < containerActivate.length; i++) {
            containerActivate[i].addEventListener("click", function(e){
              for (var j = 0; j < containerActivate.length; j++) {
                containerActivate[j].classList.remove("on-click");
              }
              e.currentTarget.classList.add("on-click");
              currentSelection = e.target;
              userInput.focus();
            });


         userInput.addEventListener('keyup', function(go) {
          if (currentSelection) {
            var get = currentSelection.querySelector('.description').innerHTML
            // var get = document.getElementById('description').innerHTML;
            console.log("yo")
            // get = event.currentTarget;
         // currentSelection.querySelector('.description').innerHTML = this.value;
            get = event.target;
          // currentSelection = this.value;
        // currentSelection = event.currentTarget;
        // console.log(oldIife)
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



// var CarLot = (function (events) {
//   var carContainer = document.getElementsByClassName("border-this");
//   var userInput = document.getElementById("userInput");


//     events.activateEvents = function() {
//       for (var i = 0; i < carContainer.length; i++) {
//         carContainer[i].addEventListener("click", function(event) {
//           for (var x = 0; x < carContainer.length; x++) {
//             carContainer[x].classList.remove('selected');
//           }
//             event.currentTarget.classList.add('selected');
//             selectedDescription = event.currentTarget;
//             userInput.focus();
//             userInput.value = null;
//           });
//         };
//         userInput.addEventListener('keyup', function(e) {
//           if (selectedDescription) {
//           selectedDescription.querySelector('.description').innerHTML = this.value;
//         }
//     });
//   }
//     return events
// })(CarLot || {});


