var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function () {
      var myInventory = ["inventory.json"]
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      var inventory = JSON.parse(this.responseText);

      populatePage(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };
})();





// When you click on one of the car elements, change the width of the border to a higher value, and change the background
// color to any other color of your choosing.
// Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
// When you start typing into the navbar's text input, the description, and only that property, of the currently
// selected car should be bound to what you are typing in and match it exactly.