
var name = ["sagar","sam","chetan"];

var out = name.map(function(e,i,arr){
    return e
})

console.log(out)


// __________________________________________________________

var num = [1, 2, 3, 4, 5]

var out = num.map(function(e,i,arr) {
    return e*2
})

console.log(out)

// _________________________________________________________


var mobiles = [{brand:"apple",model:"11 pro"},{brand:"Nokia",model:"s250"},{brand:"one plus",model:"7 pro"}]

var out = mobiles.map(function(e,i,arr) {
    // console.log(e.brand)
    return e
})

console.log(out)