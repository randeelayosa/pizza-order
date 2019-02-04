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
