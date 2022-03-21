
var num = [2,3,6,7,5,3,7];
var sum = 0;
for(var i=0; i<num.length; i++)
{
    var count = 0
    for(var j=0; j<num.length; j++)
    {
        if(num[i] == num[j])
        {
            count++
        }

    }
    if(count == 1)
    {
        sum = sum + num[i]
    }
}
console.log(sum)