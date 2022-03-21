


var number = [12, 25, 5, 17, 50, 35]

var out = number.reduce(function(sum,e,i,arr) {
    return sum + e
})

// console.log(out)

//_____________________________________________________


var number = [12, 25, 5, 17, 50, 35]

var out = number.reduce(function(sum,e,i,arr) {
    return sum + e
},10)

console.log(out)