
function differance(x,y)
{
    diff = x - y
    return diff
}

// console.log(differance(12,4))

function absolute(a,b)
{
    absolute_diff = differance(a,b)
    
    absolute_diff =  absolute_diff * -1
    return absolute_diff 
}

console.log(absolute(4,14))

