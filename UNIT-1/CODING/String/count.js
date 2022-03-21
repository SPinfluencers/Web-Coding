// given name count the total no of words and charecters

var name = "Masai school sagar";


var count = 0;
for(var i=0; i<name.length; i++)
{
    
    
        count = count + name[i].length;
    
}
console.log(count-1);



var count2 = 0;
for(var i=0; i<name.length; i++)
{
    var char = name[i]
    
        if(char == " ")
        {
            count2 = count2 + char.length;
        }
    
}
console.log(count2+1);