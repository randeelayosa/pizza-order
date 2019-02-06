// function Pizza() {
//   this.orders = [],
//   // this.currentId = 0
// }

// Pizza.prototype.addOrder = function(order) {
//   order.id = this.assignId();
//   this.orders.push(order);
// }
//
// Pizza.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
//
// Pizza.prototype.findOrder = function(id) {
//   for (var i=0; i< this.orders.length; i++) {
//     if (this.orders[i]) {
//       if (this.orders[i].id == id) {
//         return this.orders[i];
//       }
//     }
//   };
//   return false;
// }


function Order(name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
}

var info = [];

Order.prototype.cost = function() {
  return cost = "$" + (parseInt(this.size)) + (parseInt(this.topping));
}


function displayOrderDetails(pizzaToDisplay) {
  var list = $("ul#order");
  var htmlForOrderInfo = "";
  pizzaToDisplay.orders.forEach(function(order) {
    htmlForOrderInfo += "<li>" + Order.cost + "</li>";
  });
  list.html(htmlForOrderInfo);
};

function showOrder(pizzaOrder) {
  // var order = pizza.findOrder(orderId);
  $("#show-order").show();
  $(".name").html(order.name);
  $(".size").html(order.size);
  $(".topping").html(order.topping);
}

// function attachOrderListeners() {
//   $("ul#cost").on("click", "li", function() {
//     showOrder(Order.cost);
//   });
// };

function refreshPage(){
  window.location.reload();
}



$(document).ready(function() {
  // attachOrderListeners();
  $("form#new-customer").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var selectedSize = $("#size").val();
    var selectedTopping = $("#topping").val();
    var newOrder = new Order(inputtedName, selectedSize, selectedTopping);
    $(".name").append(inputtedName);
    $(".size").append(selectedSize);
    $(".topping").append(selectedTopping);
    newOrder.addOrder(cost);
    var result = newOrder.cost();
    $("#show-order").show();
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
