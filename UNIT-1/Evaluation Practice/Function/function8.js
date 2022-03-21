
// Write a function to convert a character to lower case

function charToLower(char)
{
   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lower = "abcdefghijklmnopqrstuvwxyz";
   var bag = "";
   for(var i=0; i<=upper.length-1; i++)
   {
     if(char == upper[i])
     {
         bag = bag + lower[i]
     }
   }
   return bag
}

// var char = "H";

// Use this function to convert a given word to lower case



function wordToLower(name)
{
    var bag2 = "";
    for(var i=0; i<=name.length-1; i++)
    {
        bag2 = bag2 + charToLower(name[i])
    }
    return bag2
}

var name = "SAGAR";

// console.log(wordToLower(name))

function convertArrToWord(input)
{
   var output = [];

   for(var i=0; i<input.length; i++)
   {
       output.push(wordToLower(input[i]))
   }
   return output
}


var input = ["MA", "SA", "I", "SCH", "OOL"];

console.log(convertArrToWord(input))

