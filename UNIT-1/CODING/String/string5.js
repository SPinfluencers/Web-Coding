
var name1 = "Sagar";
var name2 = [];

for(var i=0; i<name1.length; i++)
{
    name2.push(name1[i]);
}
name2[2]="G";
// console.log(name2)

var bag = "";
for(var i=0; i<name2.length; i++)
{
    bag = bag +name2[i]
}
console.log(bag);