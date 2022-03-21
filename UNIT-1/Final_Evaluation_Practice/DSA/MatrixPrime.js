arr = [
       [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9],
    ];


    function checkPrime(num)
    {
        var count = 0;
       for(var i=1; i<=num; i++)
       {
           if(num%i == 0)
           {
               count++
           }
       }
       if(count == 2) {
           return "Prime"
       }
       else {
           return "Non Prime"
       }
    }

var row = 3;
var col = 3;
var count = 0;
for(var i=0; i<row; i++)
{
    for(var j=0; j<col; j++)
    {
        // console.log(arr[i][j])

        if(checkPrime(arr[i][j]) == "Non Prime")
        {
            // console.log(arr[i][j])
            count++
        }
    }
}
console.log(count)