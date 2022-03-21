
var amazon = [
    {name : "Headphone", price : 1500, rating : 4},
    {name : "Speaker", price : 4000, rating : 5},
    {name : "Mobile", price : 15000, rating : 3},
    {name : "Led", price : 25000, rating : 2},
    {name : "Laptop", price : 150000, rating : 5},
    {name : "macbook", price : 25, rating : 1}
]



// for(var i=0; i<amazon.length; i++)
// {
//     if(amazon[i].price < 10000)
//     {
//         console.log(amazon[i])
//     }
// }


// for(var i = 0; i < amazon.length; i++)
// {
//     if(amazon[i].rating >= 3)
//     {
//         console.log(amazon[i])
//     }
// }


for(var i = 0; i < amazon.length; i++)
{
    if(amazon[i].price > 10000 && amazon[i].price < 50000)
    {
        console.log(amazon[i])
    }
}