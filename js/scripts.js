function Order(name, size, topping) {
  this.name = name,
  this.size = size,
  this.topping = topping
}

Order.prototype.cost = function() {
  var cost = "$" + (((parseInt(this.size)) + (parseInt(this.topping))).toFixed(2));
  this.cost = cost;
}

function refreshPage(){
  window.location.reload();
}

$(document).ready(function() {
  $("form#new-customer").submit(function(event) {
    $("#show-order").show();
    $("#new-customer").hide();
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var selectedSize = $("#size").val();
    var selectedTopping = $("#topping").val();
    var newOrder = new Order(inputtedName, selectedSize, selectedTopping);
    $(".name").text(inputtedName);
    $(".size").text(selectedSize);
    $(".topping").text(selectedTopping);
    newOrder.cost();
    $(".cost").text(newOrder.cost);
  })
})
