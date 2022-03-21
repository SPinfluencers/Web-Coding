
// Given a string print, the number of times each character appears

var arr = "KSBRPKB" ;

var object = {};

for(var i=0; i<arr.length; i++)
{
  if(object[arr[i]]=== undefined)
  {
      object[arr[i]] = 1;
  }
  else
  {
      object[arr[i]]++
  }
}

console.log(object)