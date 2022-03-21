
// USING OBJECT

var arr = [1, 2, 3, 2, 4, 4, 4, 5];
var N = arr.length;

var obj = {};


for(var i=0; i<N; i++)
{
    if(obj[arr[i]] == undefined)
    {
        obj[arr[i]] = 1
    }
    else
    {
        obj[arr[i]]++
    }
}
// console.log(obj)

var max = -Infinity
for(var key in obj)
{
    // console.log(obj[key])
    if(obj[key] > max) {
        max = obj[key] 
    }
}
console.log(max)