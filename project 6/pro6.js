const apiKey = "0c076ebf7535f1b57cde4fd77deadb10";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathr-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        alert("City not found. Please try again!");
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/cloudss.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/p.jpg";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.webp";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        } else {
            weatherIcon.src = "img/default.png";
        }
    }
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim() !== "") {
        checkWeather(searchBox.value);
    } else {
        alert("Please enter a city name.");
    }
});

