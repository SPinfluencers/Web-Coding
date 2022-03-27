
var k = 7
var arr = [2 , 5 , 4 , 6 , 1 , 3]

var left = 0 
var right = arr.length-1

function twoPointer(arr,k) {

    while(left < right) {

        for(var i=0; i<arr.length; i++) {

            var sum = arr[left]+arr[right]

            if(sum == k) {
              return arr[left] + " " +  arr[right]

            }
            else if(sum < k) {

                left++
            }

            else {
                
                right--
            }
        }
     }
}
console.log(twoPointer(arr,k))
