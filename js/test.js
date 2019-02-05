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


function Order(name, Size, Topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
}

function Size(small, medium, large, xl) {
  this.small = 5,
  this.medium = 8,
  this.large = 10,
  this.xl = 15
}

function Topping(pepperoni, olives, peppers, none) {
  this.pepperoni = 3,
  this.olives = 1,
  this.peppers = 2,
  this.none = 0
}

var size = [small, medium, large]{
  sizeInt = [5,10,15];
}

Order.prototype.cost = function() {
  return "$" + this.size + this.topping;
}

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
  $(".size").html(order.size.inputtedSize);
  $(".topping").html(order.topping.inputtedTopping);
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















// function Pizza() {
//   this.orders = []
// }
//
// Pizza.prototype.addOrder = function(order) {
//   this.orders.push(order);
// }
//
// function Order(name, size, topping) {
//   this.name = name,
//   this.size = size,
//   this.topping = topping
// }
//
// Order.prototype.cost = function() {
//   return this.name + ", your total is:" + this.size + this.topping;
//   console.log(cost);
// };
//
// // console.log(cost);
//
//
// //
// function displayOrderDetails(pizzaToDisplay) {
//   var orderList = $("div#complete");
//   var htmlForOrderInfo = "";
// //   pizzaToDisplay.order.forEach(function(order) {
// //     htmlForOrderInfo += "<li>" + order.name + "</li>";
//   // };
//   orderList.html(htmlForOrderInfo);
// };
//
// function completeOrder() {
//   $("ul#orders").on("click", "li", function() {
//     showOrder(this.order);
//   });
//   console.log(showOrder);
// };
//
// $(document).ready(function() {
//   $("form#new-customer").submit(function(event) {
//     event.preventDefault();
//     var inputtedName = $("input#customer").val();
//     var inputtedSize = $("input:radio[name=size]:checked").val();
//     var inputtedTopping = $("input:radio[name=topping]:checked").val();
//     var sizeInt = parseInt(inputtedSize);
//     var toppingInt = parseInt(inputtedTopping);
//     console.log(sizeInt+toppingInt)
//     var newOrder = new Order (inputtedName, inputtedSize, inputtedTopping);
//     // pizza.addOrder(newOrder);
//     // displayOrderDetails(pizza);
//     // $("#show-order").text(newOrder);
//     // console.log(pizza.order)
//     // // $("#complete").toggle();
//
//     (".name").text(inputtedName);
//
//   });
// });
