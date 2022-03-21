// AVERAGE OF EVEN NUMBERS
// Print the average of even numbers from 1 to 100 (both included)

var sum = 0;

for(var i=1; i<=100; i++)
{
    if(i%2==0)
    {
        sum=sum+i;
    }
}
console.log(sum/i);