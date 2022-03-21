

var product = ["Earphone","Heaphone","Mobile","Laptop","charger"];

product.push("T.V","LED","Setup-box");
var last_three = product.length-3;

for(var i=last_three; i<=product.length-1; i++)
{
    console.log(product[i]);
}