

var number = [12, 25, 5, 17, 50, 35]

var result = number.filter(function(e,i,arr) {
    return e < 20
})

// console.log(result)


//__________________________________________

// filter Even No

var number = [12, 25, 5, 17, 50, 35]

var result = number.filter(function(e,i,arr) {
    return e%2==0
})

// console.log(result)


//____________________________________________

var mobiles = [{brand:"apple",model:"11 pro"},{brand:"Nokia",model:"s250"},{brand:"one plus",model:"7 pro"}]

var out = mobiles.filter(function(e,i,arr) {
    
    return e.brand=="Nokia"
})

console.log(out[0].model)