
var todoItom = JSON.parse(localStorage.getItem("todolist"))

// console.log(todoItom)

var completed = JSON.parse(localStorage.getItem("completObj")) || []

todoItom.map(function(element) {

    var row = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = element.name

    var td2 = document.createElement("td")
    td2.innerText = element.qty

    var td3 = document.createElement("td")
    td3.innerText = element.priority

    var td4 = document.createElement("td")
    td4.innerText = "complete"
    td4.style.color = "blue"
    td4.style.cursor = "pointer"

    td4.addEventListener("click", function() {
        addcompleted(element)
    })

    row.append(td1,td2,td3,td4)

    document.querySelector("tbody").append(row)
})

function addcompleted(element) {
    console.log(element)
    completed.push(element)
    localStorage.setItem("completObj",JSON.stringify(completed))
}