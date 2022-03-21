// PRODUCT OF NUMBERS
// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

var arr = [2,3,4];

var out = arr.filter(function(element) {
    return element
}).reduce(function (product,element) {
    return product*element
},1)

console.log(out)