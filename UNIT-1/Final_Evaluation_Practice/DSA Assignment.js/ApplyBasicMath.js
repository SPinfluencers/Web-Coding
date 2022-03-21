
var arr = [14, 7, 8, 2, 4];

var pad_max = -Infinity
var index = -1

for(var i=0; i<arr.length; i++)
{
    var sum = 0;
    for(var j=0; j<arr.length; j++)
    {
        if(i == j)
        {
            continue
        }
        sum = sum + arr[j]
    }
    // console.log(sum)

    if(sum % 7 == 0)
    {
       pad_max > arr[i] 

       pad_max = arr[i]

       index = i

    }
}
console.log(index)

