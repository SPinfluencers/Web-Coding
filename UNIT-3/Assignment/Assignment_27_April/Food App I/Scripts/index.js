
import navbar from "../Componant/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

// Data from API

let container = document.getElementById("container")

let getData = async () => {

    try {

        let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        let data = await res.json()
        let recipe = data.meals

        appendData(recipe)

        console.log(recipe)
    }

    catch(err) {
        console.log(err)
    }
}

getData()

// let append = (data) => {

//     let container = document.getElementById("container")

//     data.forEach((e) => {

//         let image = document.createElement("img")
//         image.src = e.strMealThumb

//         container.append(image)

//     })

// }

function appendData(data) {
   
    data.forEach(function(e) {

        let image = document.createElement("img")
        image.src = e.strMealThumb

        container.append(image)

    })
}

input.addEventListener("input")
