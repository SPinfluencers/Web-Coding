
let arr = [];

function Products(n, c, i, p, g) {
    this.name = n;
    this.category = c;
    this.image = i;
    this.price = p;
    this.gender = g;
}

function myfunction(e) {

   e.preventDefault();

   let form = document.getElementById("add");

   let name = form.name.value;
//    console.log(name)
   let category = form.category.value;

   let image = form.image.value

   let price = form.price.value;

  let gender = form.gender.value;

// //    let image = form.category.value;

   let list = new Products(name, category, image, price, gender)

   arr.push(list)
//    console.log(arr)
  localStorage.setItem("arr" , JSON.stringify(arr))

}