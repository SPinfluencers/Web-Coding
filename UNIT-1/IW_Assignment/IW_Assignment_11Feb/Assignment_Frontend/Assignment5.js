// ARRAY TO LOWER CASE

// Write a function to convert a character to lower case

function char(name)
{
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    
    for(var i=0; i<upper.length; i++)
    {
        if(name==upper[i])
        {
            return lower[i];
        }
    }
}

// var name = "M"
// console.log(char(name));

// Use this function to convert a given word to lower case

var word = "MASAI";
var bag = "";
for(var i=0; i<word.length; i++)
{
    bag = bag + char(word[i]);
}
// console.log(bag);



// Use that function to convert an array of strings to array of lower case strings

var input = ["MA", "SA", "I", "SCH", "OOL"];
var output = [];

for(var i=0; i<input.length; i++)
{
   var bag = "";
   var value = input[i];

   for(var j=0; j<value.length; j++)
   {
       bag = bag + char(value[j]);
   }

   output.push(bag)
}
console.log(output)