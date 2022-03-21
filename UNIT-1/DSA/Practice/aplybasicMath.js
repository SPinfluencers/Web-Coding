

var num = [14, 7, 8, 2, 4];

var small = Infinity;
var index = -1

var total_sum = 0;
for(var i=0; i<=num.length-1; i++)
{
    total_sum = total_sum + num[i]
}
// console.log(total_sum)

var sum_remove = 0;
for(var j=0; j<=num.length-1;j++)
{
    sum_remove = total_sum - num[j]

    if(sum_remove%7 == 0)
    {
        if(num[j] > small)
        {
            small = num[j]
            index = j
        }
    }
}

console.log(index)