
// http://www.omdbapi.com/?apikey=a279110f&s=%22om%20shanti%20om%22

let movies_div = document.getElementById("movies");

let id;

async function searchMovies() {

try {
    const query = document.getElementById("query").value;

    if(query == "") {
         abcd ()
    }

    const res = await fetch(`http://www.omdbapi.com/?apikey=a279110f&s=${query}`)
   
    const data = await res.json();

    const movies = data.Search
    console.log(movies)
    // appendMovies(movies)
    return movies
    
   
   }
   catch(err) {
       console.log(err)
   }
}

function abcd() {
    movies_div.innerHTML = null;
}

function appendMovies(data) {
    
   movies_div.innerHTML = null;

    data.forEach(function(e){
        let Details = document.createElement("div")

        let poster = document.createElement("div")

        let detail = document.createElement("div")

        let p = document.createElement("h5")
        p.innerText = e.Title

        let Poster = document.createElement("img")
        Poster.src = e.Poster

        poster.append(Poster)
        detail.append(p)

        Details.append(poster,detail)

        Details.addEventListener("click" , function() {
            movieClick(e)
        })

        movies_div.append(Details)
        
    });
    
}

async function main() {
    let data = await searchMovies();

    if(data == undefined) {
        return false
    }
    appendMovies(data)
}

// Debouncing

function debounce(func , delay) {
    if(id) {
        clearTimeout(id);
    }

    id = setTimeout(function () {
        func();
    }, delay)
}

var arr = [];

   function movieClick(e) {
    arr.push(e)
    window.location.reload()
    localStorage.setItem("movies" , JSON.stringify(e))
}

// let movie = JSON.parse(localStorage.getItem("movies"))

// function displayMoie(data) {

//     let containt = document.getElementById("containt")
//     containt.innerHTML = null

//     data.map(function(e) {
//         let div = document.createElement("div")

//         let img = document.createElement("img")
//         img.src = e.Poster

//         div.append(img)
//         containt.append(div)
//     })
// }
// displayMoie(arr)

var mov = JSON.parse(localStorage.getItem("movies"))

var box = document.createElement("div")

var detail = document.createElement("div")

var value = Math.random()*10
var imd = Math.floor(value)

var img = document.createElement("img")
img.src = `${ mov.Poster}`

var Title = document.createElement("h2")
Title.innerText = `${mov.Title}`

var Type = document.createElement("h4")
Type.innerText = `${mov.Type}`

var Year = document.createElement("h4")
Year.innerText = `${mov.Year}`

box.append(img)
detail.append(Title , Type , Year)
containt.append(box , detail)
