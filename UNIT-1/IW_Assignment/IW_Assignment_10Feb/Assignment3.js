// COUNT ARRAY STRING CHARACTERS
// Given an array of string count the overall total number of characters

var hero = ["AlluArjun","Prabhas","Ntr","Salman"];
var sum = 0;

for(var i=0; i<hero.length; i++)
{
    sum = sum + hero[i].length ;
    
}
console.log(sum);