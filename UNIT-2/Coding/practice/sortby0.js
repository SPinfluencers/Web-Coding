
var arr = [1, 1, 0, 1, 1, 1, 0];

var arr1 = [];

for(var i=0; i<arr.length; i++) {
   
    for(var j=0; j<arr1.length; j++) {
        
        if(arr1[j] == undefined) {
            arr1.push(arr[i])
        }
        
        else {
           arr[i]++
        }
    }
}
console.log(arr1)