
// count such pairs

var num = [3 ,0 ,6 ,2 ,7 ];

var k = 9
var sum = 0
var count = 0;
for(var i=0; i<num.length; i++)
{
    
    for(var j=i+1; j<num.length; j++)
    {
       var x =  num[i] + num[j]
       if(x == k)
    {
        count++
    }
    }
    
    
}
console.log(count)