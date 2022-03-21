
var arr = [12, 32, 54, 61]
var sum = 0;
for(var i=0; i<arr.length; i++)
{
    rem = arr[i]

    while (rem > 0) 
    {
       sum = sum + rem%10

       rem = Math.floor(rem/10)
    }
}
console.log(sum)