

function lowerToupper(char) 
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUvWXYZ";
    
    var bag = "";
    for(var i=0; i<upper.length; i++)
    {
        if(char == lower[i])
        {
            bag = bag + upper[i]
        }
    }
    return bag
}


function wordToUpper(word)
{
   var bag2 = "";
   for(var i=0; i<word.length; i++)
   {
       if(i==0)
       {
         bag2 = bag2 + lowerToupper(word[i])
       }
       else
       {
           bag2 = bag2 + word[i]
       }
      
   }
   return bag2
}


function convertArrayToWord(arr)
{
    var output = [];

    for(var i=0; i<arr.length; i++)
    {
        output.push(wordToUpper(arr[i]))
    }

    return output
}


var array = ["masai","school"];

console.log(convertArrayToWord(array))