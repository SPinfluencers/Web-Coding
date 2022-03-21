// ARRAY STRING LENGTH
// Given an array of strings print the length of each string

// example : ["apple", "windows", "ubuntu"]


var arr = ["apple", "windows", "ubuntu"] 

var out = arr.map(function(element) {
    return element.length
})

console.log(out)