
// Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}

var name = ["Rice", "Dal", "Salt"];
var quantity = [2, 3, 1];
var price = [60, 50, 20];

var object = [];

for(var i=0; i<name.length; i++)
{
    var data = {}

    data.name = name[i]
    data.quantity = quantity[i]
    data.price = price[i]

    object.push(data)
}

console.log(object)

// The object must have a method called total which calculates the total values of items (multiplying quantity of each with its price)

var data = {

    name : ["Rice", "Dal", "Salt"],
    quantity : [2, 3, 1],
    price : [60, 50, 20],

    total : function () {
        var sum = 0;
        for(var i=0; i<name.length; i++)
        {
            sum = sum + this.quantity[i] * this.price[i]
        }
        console.log(sum)
    }

}

data.total()