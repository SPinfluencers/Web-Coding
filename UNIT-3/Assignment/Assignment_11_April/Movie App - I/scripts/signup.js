
let signupData = []
console.log(signupData)

console.log(signupData)

function storedData(a, b, c, d) {
    this.name = a
    this.number = b
    this.email = c
    this.password = d
}

function myfunction(e) {

    e.preventDefault();

    let form = document.getElementById("add")

    let name = form.name.value

    let contact = form.number.value

    let email = form.email.value

    let password = form.password.value

    var x = new storedData(name, contact, email, password)

    signupData.push(x)

    localStorage.setItem("signupData" , JSON.stringify(signupData))
}