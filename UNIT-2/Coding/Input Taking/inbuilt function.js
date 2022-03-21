
// Number()

var x = "12";

console.log(Number(x))
console.log(typeof(Number(x)))

// trim()

var str = "      sagar pawar"

console.log(str.trim())

// split

var str = "The quick brown, fox jumps over the lazy dog";
console.log(str.split("m"))
var name = "sagar rajendra pawar";
console.log(name.split(" "))
var str1 = "masai school"
console.log(str1.split("z"))
var str2 = "masai school"
console.log(str2.split(""))

// find the sum of digit
var num = "12345";
var s = num.split("")
// console.log(s)
var arr = []
for(var i=0; i<s.length; i++)
{
   arr.push([Number(s[i])])  
}
// console.log(arr)

var num1 = "12345";

var output = map[Number(num1)]

console.log(output)