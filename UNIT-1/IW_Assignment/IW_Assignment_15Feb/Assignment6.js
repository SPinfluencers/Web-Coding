// Write a custom function that has the same behaviour of inbuilt String Replace Function


var p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

var count = 0
var bag = ""
var output = [];


var bag1 = ""
for(var i=0; i<=p.length-1; i++)
{
    if(p[i]==" ") {
        output.push(bag1) 
        bag1 = ""
    }
    else {
        bag1 = bag1 + p[i] 
        if(i==output.length-1) {
            output.push(bag1)
        }
    }
}

var output1 = [];
var bag3 = ""
for(var k=0; k<=output.length-1; k++)
{
    if(output[k]=="dog")
    {
       bag3 = bag3 + "Monkey";
    }
    else {
        bag3 = bag3 + output[k]
    }
}
output1.push(bag3)
console.log(output1)

console.log(p.replace('dog', 'monkey'));