

var friend = [
    {name:"chetan", age:29, city:"Dhule"},
    {name:"sam", age:31, city:"Erandol"},
    {name:"rahul", age:29, city:"surat"}
]

console.log(friend[1].age)

console.log(friend[2].city)

for(var i=0; i<friend.length; i++)
{
    console.log(friend[i].name, friend[i].age, friend[i].city)
}