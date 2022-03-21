
//ARRAY EVEN NUMBERS AVERAGE
// Given an array of numbers find the average of all the even numbers.

var num = [11, 22, 35, 28, 9, 3, 46, 12];
var count=0;
var sum = 0;
for(var i=0; i<=num.length-1; i++)
{
    
    if(num[i]%2==0)
    {
        count++;
        sum = sum + num[i];
    }
}
console.log(sum/count);