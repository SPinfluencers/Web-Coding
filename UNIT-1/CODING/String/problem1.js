// Given arr of name of students count name which start from A

var names = ["sagar","chetan","rahul","sam","vijay","jay"];
var count = 0;
for(var i=0; i<names.length; i++)
{
    var x = names[i];

    if(x[0]=="s" || x[0]=="S")
    {
        count++
    }
}
console.log(count)