
var employee = ["Sam", "John", "Mark", "Peter", "Simon"]
var department = ["Sales", "Marketting", "Operation", "Finance", "Tech"]
var salary  = [40000, 60000, 50000, 60000, 70000]

var data = [];

for(var i=0; i<employee.length; i++)
{
    var obj = {}

    obj.name = employee[i]
    obj.department = department[i]
    obj.salary = salary[i]

    data.push(obj)
}

// console.log(data)

for(var i=0; i<data.length; i++)
{
    console.log(data[i].name)
}