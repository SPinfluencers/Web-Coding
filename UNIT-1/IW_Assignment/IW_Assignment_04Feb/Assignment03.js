// MULTIPLES OF 3
// Print the sum of all the multiples of 3 from 0 to the given limit

var limit = 30;
var sum = 0;
for(var i=0; i<=limit; i++)
{
    if(i%3==0)
    {
        sum = sum + i;
    }
}
console.log(sum);