
// import navbar from "../Componant/navbar.js";

// document.getElementById("navbar").innerHTML = navbar()

// Data from API

// https://www.themealdb.com/api/json/v1/1/search.php?f=a

let recipe_Data = document.getElementById("container")

let id;

async function getData() {

    try {
        const query = document.getElementById("query").value

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

        const data = await res.json();

        const recipe = data.meals

        appendRecipe(recipe)

        console.log(recipe)

    }
    catch (err) {
        console.log(err)
    }
}

// getData()

function appendRecipe(data) {

    recipe_Data.innerHTML = null
    
    data.forEach(function(e) {
        
        let details = document.createElement("div")
        details.style.backgroundColor = "teal"

        let strMeal = document.createElement("h1")
        strMeal.innerText = e.strMeal
        strMeal.style.color = "white"

        let strMealThumb = document.createElement("img")
        strMealThumb.src = e.strMealThumb
        strMealThumb.style.width = "80%"
        strMealThumb.style.height = "500px"

        let strArea = document.createElement("h4")
        strArea.innerText = `Cusion - ${e.strArea}`
        strArea.style.fontSize = "30px"
        strArea.style.color = "white"

        let make = document.createElement("h4")
        make.innerText = "Let's Make It" 
        make.style.color = "white"
        make.style.fontSize = "20px"
        make.style.padd

        let instruction = document.createElement("h4")
        instruction.innerText = "Instruction"
        instruction.style.color = "white"
        instruction.style.fontSize = "20px"
        instruction.style.backgroundColor = "red"

        let inst = document.createElement("p")
        inst.innerText = e.strInstructions

        let ingredients = document.createElement("h4")
        ingredients.innerText = "Ingredients"
        ingredients.style.color = "white"
        ingredients.style.fontSize = "20px"
        ingredients.style.backgroundColor = "red"

        let ingdiv = document.createElement("div")
        ingdiv.setAttribute("class" , "ingredientDiv")

        let image1 = document.createElement("img")
        image1.src = `https://www.themealdb.com/images/ingredients/${e.strIngredient1}-Small.png`
        let image2 = document.createElement("img")
        image2.src = `https://www.themealdb.com/images/ingredients/${e.strIngredient2}-Small.png`
        let image3 = document.createElement("img")
        image3.src = `https://www.themealdb.com/images/ingredients/${e.strIngredient3}-Small.png`
        let image4 = document.createElement("img")
        image4.src = `https://www.themealdb.com/images/ingredients/${e.strIngredient4}-Small.png`
        let image5 = document.createElement("img")
        image5.src = `https://www.themealdb.com/images/ingredients/${e.strIngredient5}-Small.png`
        let image6 = document.createElement("img")
        image6.src = `https://www.themealdb.com/images/ingredients/${e.strIngredient6}-Small.png`
        let image7 = document.createElement("img")
        image7.src = `https://www.themealdb.com/images/ingredients/${e.strIngredient7}-Small.png`
        let image8 = document.createElement("img")
        image8.src = `https://www.themealdb.com/images/ingredients/${e.strIngredient8}-Small.png`

        ingdiv.append(
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8
        )

        let ing1 = document.createElement("p")
        ing1.innerText = `• ${e.strMeasure1} ${e.strIngredient1}`
        ing1.style.color = "white"
        ing1.style.fontSize = "20px"
        let ing2 = document.createElement("p")
        ing2.innerText = `• ${e.strMeasure2} ${e.strIngredient2}`
        ing2.style.color = "white"
        ing2.style.fontSize = "20px"
        let ing3 = document.createElement("p")
        ing3.innerText = `• ${e.strMeasure3} ${e.strIngredient3}`
        ing3.style.color = "white"
        ing3.style.fontSize = "20px"
        let ing4 = document.createElement("p")
        ing4.innerText = `• ${e.strMeasure4} ${e.strIngredient4}`
        ing4.style.color = "white"
        ing4.style.fontSize = "20px"
        let ing5 = document.createElement("p")
        ing5.innerText = `• ${e.strMeasure5} ${e.strIngredient5}`
        ing5.style.color = "white"
        ing5.style.fontSize = "20px"
        let ing6 = document.createElement("p")
        ing6.innerText = `• ${e.strMeasure6} ${e.strIngredient6}`
        ing6.style.color = "white"
        ing6.style.fontSize = "20px"
        let ing7 = document.createElement("p")
        ing7.innerText = `• ${e.strMeasure7} ${e.strIngredient7}`
        ing7.style.color = "white"
        ing7.style.fontSize = "20px"
        let ing8 = document.createElement("p")
        ing8.innerText = `• ${e.strMeasure8} ${e.strIngredient8}`
        ing8.style.color = "white"
        ing8.style.fontSize = "20px"

       details.append(strMeal,
                      strMealThumb,
                      strArea,make,
                      instruction,inst,
                      ingredients,
                      ingdiv,
                      ing1,
                      ing2,
                      ing3,
                      ing4,
                      ing5,
                      ing6,
                      ing7,
                      ing8,)


                      recipe_Data.append(details)
    })
}

    // Debouncing Start

async function main() {
    let data = await getData();

    if(data == undefined) {
        return false
    }
    appendRecipe(data)
}

function debounce(func,delay) {
    if(id) {
        clearTimeout(id)
    }
    id = setTimeout(function() {
       func()
    }, delay)
}

    // Debouncing End