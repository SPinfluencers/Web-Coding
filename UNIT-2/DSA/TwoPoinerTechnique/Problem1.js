
var arr= [25, 19, 15, 11, 7, 2];
var target = 18

function twoPointer(arr,target) {

    var left = 0
    var right = arr.length-1

    while(left < right) {
        sum = arr[left] + arr[right] 
        {
            if(sum == target) {
                return(left+" "+right)
            }
            if(sum > target) {
            left++
            }
            else {
                right--
            }
        }
       
   }
   return("-1,-1") 
}

console.log(twoPointer(arr,target))