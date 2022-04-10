
var formData = JSON.parse(localStorage.getItem("formData")) || [];

// console.log(formData)

formData.map(function(e , i) {

    var box = document.createElement("div")

    var name = document.createElement("p")
    name.innerText = e.name

    var branch = document.createElement("p") 
    branch.innerText = e.branch

    var mb = document.createElement("p")
    mb.innerText = e.mb

    var gender = document.createElement("p")
    gender.innerText = e.gender

    var remove = document.createElement("button")
    remove.innerText = "REMOVE"

    remove.addEventListener("click", function() {
        removeFromPage(i)
    })

    var select = document.createElement("button")
    select.innerText = "SELECT"

    select.addEventListener('click', function() {
        select.innerText = "Done"
        select.style.backgroundColor = "red"
    })


    box.append(name, branch, mb, gender, remove, select)

    document.querySelector(".info").append(box)
})

function removeFromPage(i) {
    formData.splice(i,1)
    localStorage.setItem("formData", JSON.stringify(formData))
    window.location.href = "info.html"
}