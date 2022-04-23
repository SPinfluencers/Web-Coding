
// API Key = a279110f

// http://www.omdbapi.com/?apikey=[yourkey]&

// http://www.omdbapi.com/?apikey=a279110f&s=pushpa

function getData() {

let keyword = document.getElementById("movies").value

const url = `https://www.omdbapi.com/?apikey=a279110f&s=${keyword}`


    fetch(url)
    .then(function(res) {

        return res.json()
    })

    .then(function(res) {

        let x = res.Search
        
        console.log(x)

        append(x)
    })

    .catch(function(err) {
        // if(res.Responce == "False")
        console.log(err)
        // gifData()
    })

}
// getData()

function append(data) {

    document.querySelector("#container").innerHTML = ""

    data.forEach(function(e) {

        let div = document.createElement("div")

        var Poster = document.createElement("img") 
        Poster.src = e.Poster

        var Title = document.createElement("h4")
        Title.innerText = e.Title

        var Year = document.createElement("p")
        Year.innerText = e.Year

        div.append(Poster , Title , Year)

        document.querySelector("#container").append(div)

    })

}

// function gifData() {
//     container.src = "https://media0.giphy.com/media/f7Y5MpvlzezdESzoDJ/200w.webp?cid=ecf05e47vmlnulurn016jpjbpgcb9wt6o5nx8q90dqlt9rlk&rid=200w.webp&ct=g"
// }