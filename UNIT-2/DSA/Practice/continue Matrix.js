
var arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]

var N = arr.length;

var left = 0;
var right = N-1;
var top = 0;
var bottom = N-1;
var count = 0;
var bag = "";

while ( count < N*N ) {

    for(var i=left; i<=right && count < N*N; i++ )
    {
        // console.log(arr[top][i])
        bag = bag + arr[top][i] + " ";
        
            count++
        
    }

    top++
    for(var i=top; i<=bottom && count < N*N; i++)
    {
        // console.log(arr[i][right])
        bag = bag + arr[i][right] + " ";
        
            count++
        
    }

    right--
    for(var i=right; i>=left && count < N*N; i--)
    {
        // console.log(arr[bottom][i])
        bag = bag + arr[bottom][i] + " ";
        
            count++
        
    }

    bottom--
    for(var i=bottom; i>=top && count < N*N; i--)
    {
        // console.log(arr[i][left])
        bag = bag + arr[i][left] + " ";
        
            count++
        
    }
    left++

}

console.log(bag)
