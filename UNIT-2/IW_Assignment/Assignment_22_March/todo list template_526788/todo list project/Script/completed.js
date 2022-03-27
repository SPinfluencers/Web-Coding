
var completItem = JSON.parse(localStorage.getItem("completObj"))

// console.log(completItem)

completItem.map(function(element) {
    var row = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText = element.name
    
    var td2 = document.createElement("td")
    td2.innerText = element.qty

    var td3 = document.createElement("td")
    td3.innerText = element.priority

    row.append(td1,td2,td3)

    document.querySelector("tbody").append(row)
})