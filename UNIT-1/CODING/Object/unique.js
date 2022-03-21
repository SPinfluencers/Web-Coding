

var num = [1,2,5,7,2,5,8,9];

var output = [];

var present = false;

for(var i=0; i<num.length; i++)
{
    for(var j=0; j<output.length; j++)
    {
        if(num[i] == output[j])
        {
            present = true;
            break;
        }
    }
    
    if(present == false)
    {
        output.push(num[i])
    }
    else
    {
        present = false;
    }
}

console.log(output)