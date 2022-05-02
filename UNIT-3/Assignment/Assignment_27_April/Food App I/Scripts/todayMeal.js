
// https://www.themealdb.com/api/json/v1/1/random.php

async function getRandom() {
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        let data = await res.json()
        let recipe = data.meals

        appendRecipe(recipe)

        console.log(recipe)
    }
    catch(err) {
        console.log(err)
    }
} 
getRandom()

function appendRecipe(data) {

    let Meal = document.getElementById("Meal")
    
    data.map(function(e) {

        let div = document.createElement("div")

        let strMeal = document.createElement("h2")
        strMeal.innerText = e.strMeal

        let strMealThumb = document.createElement("img")
        strMealThumb.src = e.strMealThumb

        let strArea = document.createElement("h4")
        strArea.innerText = `Cusion - ${e.strArea}`

        let make = document.createElement("h4")
        make.innerText = "Let's Make It" 

        let instruction = document.createElement("h4")
        instruction.innerText = "Instruction"

        let inst = document.createElement("p")
        inst.innerText = e.strInstructions

        let ingredients = document.createElement("h4")
        ingredients.innerText = "Ingredients"

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
        let ing2 = document.createElement("p")
        ing2.innerText = `• ${e.strMeasure2} ${e.strIngredient2}`
        let ing3 = document.createElement("p")
        ing3.innerText = `• ${e.strMeasure3} ${e.strIngredient3}`
        let ing4 = document.createElement("p")
        ing4.innerText = `• ${e.strMeasure4} ${e.strIngredient4}`
        let ing5 = document.createElement("p")
        ing5.innerText = `• ${e.strMeasure5} ${e.strIngredient5}`
        let ing6 = document.createElement("p")
        ing6.innerText = `• ${e.strMeasure6} ${e.strIngredient6}`
        let ing7 = document.createElement("p")
        ing7.innerText = `• ${e.strMeasure7} ${e.strIngredient7}`
        let ing8 = document.createElement("p")
        ing8.innerText = `• ${e.strMeasure8} ${e.strIngredient8}`

        div.append(strMeal,
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
                      ing8,
                      )

                      Meal.append(div)              
    })
}