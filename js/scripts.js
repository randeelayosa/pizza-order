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
  console.log(order)
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

function attachOrderListeners() {
  $("ul#orders").on("click", "li", function() {
    showOrder(this.order);
  });
  console.log(showOrder);
};

$(document).ready(function() {
  $("form#new-customer").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#customer").val();
    var inputtedSize = $("select#size").val();
    var inputtedTopping = $("select#topping").val();
    var newOrder = new Order (inputtedName, inputtedSize, inputtedTopping);
    pizza.addOrder(newOrder);
    displayOrderDetails(pizza);



  })
})
