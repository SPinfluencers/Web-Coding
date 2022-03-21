
// EXTRACT ODD
// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]


var arr = [1,2,3];

var odd = arr.filter(function(element) {
    return element%2 == 1
})

console.log(odd)