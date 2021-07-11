const API_KEY = "d33e843f9c25361921e2003afa15ecf0"
const weather = document.querySelector("#weathor");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const icon = document.querySelector("#icon")
            const temp = document.querySelector("#temp");
            const city = document.querySelector("#location");
            const wind = document.querySelector("#wind");
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            temp.innerText = `${data.weather[0].description} \n ${data.main.temp.toFixed(1)}°C`
            city.innerText = data.name;
            wind.innerText = `${data.wind.deg}°, ${data.wind.speed}m/s`

        })
    }

function onGeoEr() {
    alert("Can't find you!")
}

const goWeather = () => {
    link.innerHTML = "<a href = https://www.google.com/search?q=%EB%82%A0%EC%94%A8&oq=%EB%82%A0%EC%94%A8&aqs=chrome.0.69i59j0i131i433j0i433j0i131i433j0j0i433j0i131i433j69i61.811j1j4&sourceid=chrome&ie=UTF-8"
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEr);

