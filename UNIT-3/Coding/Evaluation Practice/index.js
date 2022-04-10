

let formData = JSON.parse(localStorage.getItem("formData")) || [];

function storedData(n,b,m,g) {
    this.name = n;
    this.branch = b;
    this.mb = m;
    this.gender = g;
}

function myfunction(e) {
    e.preventDefault();

    let form = document.getElementById("total");

    let name = form.name.value;

    let branch = form.branch.value;

    let mb = form.mb.value;

    let gender = form.gender.value;

    let x = new storedData(name,branch,mb,gender)

    formData.push(x)

    localStorage.setItem("formData", JSON.stringify(formData))
}