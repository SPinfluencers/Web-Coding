
function getData() {

    let city = document.getElementById("city").value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56e1f416b2f4a81d2839535a134a3c9e`

        fetch(url) 
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        append(res);
        console.log(res)
    })
    .catch(function(err) {
    console.log(err)
    })
}

function append(data) {
    let weather = document.getElementById("weather")
    let map = document.getElementById("gmap_canvas")

    weather.innerHTML = null;

    let city = document.createElement("h1")
    city.innerText = `${data.name}`

    let min = document.createElement("p")
    min.innerText = `Min Temp :   ${data.main.temp_min}`

    let max = document.createElement("p")
    max.innerText = `Max Temp :   ${data.main.temp_max}`

    let current = document.createElement("p")
    current.innerText = `Current Temp :   ${data.main.temp}`

    let humidity = document.createElement("p")
    humidity .innerText = `Humidity :   ${data.main.humidity}`

    weather.append(city, min, max, current, humidity)
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

function geolocation() {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        var crd = position.coords;

        console.log(`Your current position is:`);
        console.log(`Latitude: ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
}

