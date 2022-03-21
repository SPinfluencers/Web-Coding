var arr = [
    [1, 2, 3, 4, 5],
    [6, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 22, 23, 24, 25],
]

var N = arr.length
var k = 16;

for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(arr[i][j] == k) 
        {
            var row_of_k = i;
            var column_of_k = j;
        }
    }
}

var sum = row_of_k + column_of_k
var diff = row_of_k - column_of_k

var bag = "";
for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(i+j==sum) {
            bag = bag + arr[i][j] + " "
        }
    }
}
console.log(bag)

var bag1 = "";
for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(i-j == diff)
        {
            bag1 = bag1 + arr[i][j] + " ";
        }
    }
}
console.log(bag1)