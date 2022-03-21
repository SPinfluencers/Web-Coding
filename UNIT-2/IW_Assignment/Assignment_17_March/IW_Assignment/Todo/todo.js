


document.querySelector("form").addEventListener("submit", todoex);

function todoex() {

    event.preventDefault();

    var itemName = document.querySelector("#name").value;
    var qtyNumber = document.querySelector("#qty").value
    var priorityName = document.querySelector("#priority").value

    console.log(itemName)

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = itemName;

    var tr = document.createElement("tr");
    var td2 = document.createElement("td");
    td2.innerText = qtyNumber;

    var tr = document.createElement("tr")
    var td3 = document.createElement("td")
    td3.innerText = priorityName;

    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr)

}