

// Neigbour Element
// New arr[j] greater than arr[i]

arr = [12, 5, 9, 16, 7]
var stack = []
var result = []

for(var i = arr.length-1; i >= 0; i--) {

    while(stack.length !== 0 && stack[stack.length-1] >= arr[i]) {
         stack.pop()
    }

    if(stack.length !== 0) {
        result[i] = stack[stack.length-1]
    }
    else {
        result[i] = -1
    }

    stack.push(arr[i])
}

console.log(result)