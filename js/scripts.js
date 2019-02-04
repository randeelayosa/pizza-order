function Pizza() {
  this.orders = [],
  this.currentId = 0
}

Pizza.prototype.addOrder = function(order) {
  order.id = this.assignId();
  this.orders.push(order);
}

Pizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Pizza.prototype.findOrder = function(id) {
  for (var i=0; i< this.orders.length; i++) {
    if (this.orders[i]) {
      if (this.orders[i].id == id) {
        return this.orders[i];
      }
    }
  };
  return false;
}


function Order(name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
}

// Order.prototype.cost = function() {
//   return "$" + parseInt(this.size) + parseInt(this.topping);
// }

var pizza = new Pizza();

function displayOrderDetails(pizzaToDisplay) {
  var ordersList = $("ul#order");
  var htmlForOrderInfo = "";
  pizzaToDisplay.orders.forEach(function(order) {
    htmlForOrderInfo += "<li id=" + order.id + ">" + "Your total is: $11.00" + "</li>";
  });
  ordersList.html(htmlForOrderInfo);
};

function showOrder(orderId) {
  var order = pizza.findOrder(orderId);
  $("#show-order").show();
  $(".name").html(order.name);
  $(".size").html(order.size);
  $(".topping").html(order.topping);
}

function attachOrderListeners() {
  $("ul#order").on("click", "li", function() {
    showOrder(this.id);
  });
};

function refreshPage(){
  window.location.reload();
}



$(document).ready(function() {
  attachOrderListeners();
  $("form#new-customer").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedSize = $("input#size").val();
    var inputtedTopping = $("input#topping").val();
    var newOrder = new Order(inputtedName, inputtedSize, inputtedTopping);
    $("input#name").val("");
    $("input#size").val("");
    $("input#topping").val("");
    var newOrder = new Order(inputtedName, inputtedSize, inputtedTopping);
    pizza.addOrder(newOrder);
    displayOrderDetails(pizza);
  })
})
