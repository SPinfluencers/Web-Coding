
var arr= [25,26,12,18,71,81]


for(var i=0; i<arr.length; i++) {
    var x =arr[i]%10
    var y = Math.floor(arr[i]/10)

    console.log(x+y)
}