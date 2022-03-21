
document.querySelector("form").addEventListener("submit",bozaz);

function bozaz() {

    event.preventDefault();

    var productName = document.querySelector("#category").value;
    var qtyNumber = document.querySelector("#name").value
    var priceNumber = document.querySelector("#price").value

    // console.log(productName)

    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = productName;

    var tr = document.createElement("tr")
    var td2 = document.createElement("td")
    td2.innerText = qtyNumber;

    var tr = document.createElement("tr")
    var td3 = document.createElement("td")
    td3.innerText = priceNumber;

    tr.append(td1,td2,td3);

    document.querySelector("tbody").append(tr)
}