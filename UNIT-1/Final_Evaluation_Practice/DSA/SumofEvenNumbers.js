
// Sum of Even numbers

var arr = [2, 2, 2, 2, 1];
var sum = 0;
for(var i=0; i<arr.length; i++)
{
    if(arr[i]%2 == 0)
    {
        sum = sum + arr[i]
    }
}
console.log(sum)