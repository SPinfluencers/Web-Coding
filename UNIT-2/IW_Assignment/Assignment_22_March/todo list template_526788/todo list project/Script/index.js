
document.querySelector("#form").addEventListener("submit",myfunction);

var todoArr = JSON.parse(localStorage.getItem("todolist")) || [];

function myfunction() {

    event.preventDefault();

    var todoObj = {
        name : document.querySelector("#name").value,
        qty : document.querySelector("#qty").value,
        priority : document.querySelector("#priority").value,
    };
    console.log(todoObj)
    todoArr.push(todoObj);

    // console.log(todoArr)
    localStorage.setItem("todolist", JSON.stringify(todoArr));

   document.querySelector("#name").value = "";
   document.querySelector("#qty").value = "";
   
}




