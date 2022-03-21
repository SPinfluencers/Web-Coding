
// Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}

var name = ["Rice", "Dal", "Salt"];
var quantity = [2, 3, 1];
var price = [60, 50, 20];

var data = [];

for(var i=0; i<name.length; i++)
{
    var object = {}

    object.name = name[i]
    object.quantity = quantity[i]
    object.price = price[i]

    data.push(object)
}

console.log(data)

// The object must have a method called total which calculates the total values of items (multiplying quantity of each with its price)

var data = {

      name : ["Rice", "Dal", "Salt"],
      quantity : [2, 3, 1],
      price : [60, 50, 20],

      total : function() {
          var sum = 0;
          for(var i=0; i<this.name.length; i++)
          {
              sum = sum + (this.quantity[i]*this.price[i])
          }
          console.log(sum)
      }
}

// data.total()