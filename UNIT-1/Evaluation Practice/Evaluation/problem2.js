
var employee = ["Sam", "John", "Mark", "Peter", "Simon"]
var department = ["Sales", "Marketting", "Operation", "Finance", "Tech"]
var salary  = [40000, 60000, 50000, 60000, 70000]

var data = [];

for(var i=0; i<employee.length; i++)
{
   var obj = {}

   obj.name = employee[i];
   obj.salary = salary[i];
   obj.department = department[i];
   

   data.push(obj)

}

// console.log(data)

var data = [
    
        { name: 'Sam', salary: 40000, department: 'Sales' },
        { name: 'John', salary: 60000, department: 'Marketting' },
        { name: 'Mark', salary: 50000, department: 'Operation' },
        { name: 'Peter', salary: 60000, department: 'Finance' },
        { name: 'Simon', salary: 70000, department: 'Tech' }
      
]

function getEmployeeNames(data)
{
    
    for(var i=0; i<data.length; i++)
    {
       x = data[i].name
       return x
    }
    
}

console.log(getEmployeeNames(data))
   
