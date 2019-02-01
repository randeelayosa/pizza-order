function Pizza() {
  this.order = []
}

Pizza.prototype.addOrder = function(order) {
  this.order.push(order);
}

function Order(name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
}



var pizza = new Pizza();

function displayOrderDetails(pizzaToDisplay) {
  var orderList = $("ul#order");
  var htmlForOrderInfo = "";
  pizzaToDisplay.order.forEach(function(order) {
    htmlForOrderInfo += "<li>" + order.name + "</li>";
  });
  orderList.html(htmlForOrderInfo);
};

$(document).ready(function() {
  $("form#new-customer").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("select#name").val();
    var inputtedSize = $("select#size").val();
    var inputtedTopping = $("select#topping").val();
    var newOrder = new Order (inputtedName, inputtedSize, inputtedTopping);
    pizza.addOrder(newOrder);
    displayOrderDetails(pizza);



  })
})
