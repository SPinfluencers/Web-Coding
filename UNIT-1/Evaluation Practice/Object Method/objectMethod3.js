
// Given a list of user data with name and age, create a list of key-value pairs from the input

var name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
var age = [32, 30, 26, 28, 44];

var data = []

for (var i = 0; i < name.length; i++) 
{
    var obj = {}

    obj.name = name[i]
    obj.age = age[i]

    data.push(obj)
}

//  console.log(data)


