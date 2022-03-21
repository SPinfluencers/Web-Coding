
// Given a list of user data with name and age, create a list of key-value pairs from the input
 

var student = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
var mark = [32, 30, 26, 28, 44];

var data = [];

for(var i=0; i<student.length; i++)
{
    var object = {}

    object.student = student[i]
    object.mark = mark[i]

    data.push(object)


}

for(var i=0; i<data.length; i++)
{
    if(data[i].mark > 30) 
    {
        console.log(data[i])
    }
}

