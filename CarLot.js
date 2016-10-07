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

