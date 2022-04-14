
/* <!--Show Slideshow data here--> */

const slideData = [
    "https://cdn.pixabay.com/photo/2021/05/27/13/59/iron-man-6288206__340.jpg",
    "https://cdn.pixabay.com/photo/2020/07/02/19/36/marvel-5364165__340.jpg",
    "https://cdn.pixabay.com/photo/2020/10/28/10/02/captain-america-5692937__340.jpg",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5497/1175497-h-296b8ac63217",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/SHOW/5014/5014/5014-h"
];

const movie_data = [
   {
       img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a",
       imd_rating: "5",
       name:"Rudra",
    },
    {
        img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6182/1116182-v-a4ff74b3d55b",
        imd_rating: "4",
        name:"Trusday",
     },
     {
        img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/610/1160610-v-7ea34ec67657",
        imd_rating: "3",
        name:"83",
     },
     {
        img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1/1130001-v-88663d1d21bc",
        imd_rating: "1",
        name:"Mari",
     },
     {
        img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1608/1161608-v-8fdb21cf9c1c",
        imd_rating: "0",
        name:"Red",
     },
     {
        img_url:"https://bit.ly/3rnGUYg",
        imd_rating: "8",
        name:"Chichore",
     },
     {
        img_url:"https://bit.ly/3viYBt0",
        imd_rating: "6",
        name:"Baagi",
     },
     {
        img_url:"https://bit.ly/3jT2q33",
        imd_rating: "3",
        name:"Housfull 4",
     },
     {
        img_url:"https://bit.ly/3OkHQXg",
        imd_rating: "9",
        name:"Tanaji",
     },
     {
        img_url:"https://bit.ly/3Ej1Xk0",
        imd_rating: "5",
        name:"Hate Story 2",
     },
     {
        img_url:"https://bit.ly/3Ec4gVJ",
        imd_rating: "7",
        name:"Super 30",
     },
     {
        img_url:"https://bit.ly/38IdOfz",
        imd_rating: "7",
        name:"Jungli",
     },
     {
        img_url:"https://bit.ly/3OkHQXg",
        imd_rating: "2",
        name:"Tanaji",
     },
     {
        img_url:"https://bit.ly/3uBsDJt",
        imd_rating: "5",
        name:"Badshaho",
     },
     {
        img_url:"https://bit.ly/3KKs1qw",
        imd_rating: "8",
        name:"Bhag Milkha Bhag",
     },
     {
        img_url:"https://bit.ly/3E9v5Kr",
        imd_rating: "5",
        name:"Raid",
     },
     {
        img_url:"https://bit.ly/37cvS1c",
        imd_rating: "4",
        name:"Baby",
     },
     {
        img_url:"https://bit.ly/3jDoX3q",
        imd_rating: "3",
        name:"Bajarangi Bhaijan",
     },
     {
        img_url:"https://bit.ly/3uBsDJt",
        imd_rating: "2",
        name:"Badshaho",
     },
     {
        img_url:"https://bit.ly/379GFcx",
        imd_rating: "0",
        name:"Julie",
     },
     {
      img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6182/1116182-v-a4ff74b3d55b",
      imd_rating: "4",
      name:"Trusday",
   },
   {
      img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/610/1160610-v-7ea34ec67657",
      imd_rating: "3",
      name:"83",
   },
   {
      img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1/1130001-v-88663d1d21bc",
      imd_rating: "1",
      name:"Mari",
   },
   {
      img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1608/1161608-v-8fdb21cf9c1c",
      imd_rating: "0",
      name:"Red",
   },
   {
      img_url:"https://bit.ly/3rnGUYg",
      imd_rating: "8",
      name:"Chichore",
   },
   {
      img_url:"https://bit.ly/3viYBt0",
      imd_rating: "6",
      name:"Baagi",
   },
   {
      img_url:"https://bit.ly/3jT2q33",
      imd_rating: "3",
      name:"Housfull 4",
   },
   {
      img_url:"https://bit.ly/3OkHQXg",
      imd_rating: "9",
      name:"Tanaji",
   },
   {
      img_url:"https://bit.ly/3Ej1Xk0",
      imd_rating: "5",
      name:"Hate Story 2",
   },
   {
      img_url:"https://bit.ly/3Ec4gVJ",
      imd_rating: "7",
      name:"Super 30",
   },
   {
      img_url:"https://bit.ly/38IdOfz",
      imd_rating: "7",
      name:"Jungli",
   },
   {
      img_url:"https://bit.ly/3OkHQXg",
      imd_rating: "2",
      name:"Tanaji",
   },
   {
      img_url:"https://bit.ly/3uBsDJt",
      imd_rating: "5",
      name:"Badshaho",
   },
   {
      img_url:"https://bit.ly/3KKs1qw",
      imd_rating: "8",
      name:"Bhag Milkha Bhag",
   },

]

/* Slide Show */

// console.log(slideData)

localStorage.setItem("sideImages" , JSON.stringify(slideData));

let images_div = document.getElementById("slide_img")
let i = 0;

function start() {
    let images_arr = JSON.parse(localStorage.getItem("sideImages"))
    var img = document.createElement("img")

    setInterval(function() {
        if(i === images_arr.length) {
            i = 0;
        }

        img.src = images_arr[i]
        
        images_div.append(img)
        i++;
    }, 2000)
}
start()

/* Movie block Show */

localStorage.setItem("moviesData", JSON.stringify(movie_data))

// console.log(movie_Array)

let movie_Array = JSON.parse(localStorage.getItem("moviesData")) || []

movie_Array.map(function(ele) {

    var box = document.createElement("div")

    var image = document.createElement("img")
    image.src = ele.img_url

    // var imd_rating = document.createElement("p")
    // imd_rating.innerText = ele.imd_rating

    // var name = document.createElement("p")
    // name.innerText = ele.name

    box.append(image)

    document.querySelector("#movie_container").append(box)
})