
// Given a stringSof all lowercase letters and each letter has a value of its own.
// The value of the alphabetais1,b is 2,c is 3..... tillz is 26.
// Now you have to find the total value of the given string. 
// The total value of a string is the sum of values of all characters 
// present in string.

var lower = "abcdefghijklmnopqrstuvwxyz";

var char = "aba";
var sum = 0;

for(var i=0; i<lower.length; i++)
{
    for(var j=0; j<char.length; j++)
    {
        if(char[j] == lower[i])
        {
            sum = sum + (i+1)
        }
    }
}
console.log(sum)