
function SpiraTraversal(n,matrix) {

   var left = 0
   var right = n-1
   var top = 0
   var bottom = n-1
   var bag = ""
   var count = 0

   while(count < n*n) {

    for(var i = top; i <= bottom && count < n*n; i++) {
        //    console.log(matrix[i][right])
        bag = bag + matrix[i][right] + " "
        count++
       }
       right--
    
       for(var i = right; i >= left && count < n*n; i--) {
           bag = bag + matrix[bottom][i] + " "
           count++
       }
       bottom--
    
       for(var i = bottom; i >= 0 && count < n*n; i--) {
           bag = bag + matrix[i][left] + " "
           count++
       }
    //    console.log(bag)
        left++
    
        for(var i = left; i <= right && count < n*n; i++) {
            bag = bag + matrix[top][i] + " "
            count++
        }
        top++
        // console.log(bag)

   }

   console.log(bag)

}




function runProgram(input){
    var input = input.trim().split("\n")
    var T = +input[0]
    var line = 1
    for(var i=0; i<T; i++) {
       var n = +input[line]
       line++
       var matrix = []
       for(var i=0; i<n; i++) {
           var arr = input[line].trim().split(" ").map(Number)
           line++
           matrix.push(arr)
       }
       SpiraTraversal(n,matrix)
    }
    
}


 

if (process.env.USERNAME === "Admin") {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9
  `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}