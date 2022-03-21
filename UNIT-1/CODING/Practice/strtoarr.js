
var str = "The quick brown fox";
var bag = ""
var output = [];
for(var i=0; i<=str.length-1; i++)
{
    if(str[i] != " ")
    {
        bag = bag + str[i]
    }
    else 
    {
        output.push(bag);
        bag = ""
    }
    

}
output.push(bag)
console.log(output)