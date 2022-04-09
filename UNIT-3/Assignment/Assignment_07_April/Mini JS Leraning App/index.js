//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.


var scope = 

    {
        one: "sagar",
        two: "pawar",
        three: "Jalgaon",
        four: "Maharstra",
    }

// var hoisting  =

//     { 
//         1: "sagar",
//         2: "pawar",
//         3: "Jalgaon",
//         4: "Maharstra",
//     }
   

localStorage.setItem("dataScope",JSON.stringify(scope))

document.querySelector("#scope").addEventListener("click", myfunction)

var dataList = JSON.parse(localStorage.getItem("dataScope"))

function myfunction(dataList) {
    
    dataList.map(function(ele) {
        var ul = document.createElement("ul")
    
        var li = document.createElement("li")
        li.innerText = ele.one
    
        ul.append(li)
    
        document.querySelector("#details").append(ul)
        
    })
}



localStorage.setItem("datahoisting",JSON.stringify(hoisting))


    


