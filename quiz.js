function populatePage (inventory) {
var container = document.getElementById("container");
var counter = 0;
var carInfoOutput = "";
var currentSelection = "";

  for (var i = 0; i < inventory.cars.length; i++) {
     var car = inventory.cars[i];
     carInfoOutput += "<div id='container'>"
       carInfoOutput += "<div class='col-md-4 car_card border'>";
       carInfoOutput += "<div>"
       carInfoOutput += "<div>" + car.year + " " + car.make + " " + car.model + "</div>";
       carInfoOutput += "<div id='description' class='description'>" + car.description + "</div>";
       carInfoOutput += "<div>" + car.price + "</div>";
       carInfoOutput += "</div>";
       carInfoOutput += "</div>";
      carInfoOutput += "</div>";

    }
container.innerHTML = carInfoOutput;

CarLot.activateEvents();
};


CarLot.loadInventory();


//console log event.target. ........ down to the div I need