//51928673cc87f91c0438f7adb5345f32 
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=51928673cc87f91c0438f7adb5345f32
const apiKey = "51928673cc87f91c0438f7adb5345f32";
const apiCoutry = "https://www.countryflagicons.com/FLAT/64/";
const inputCity = document.querySelector("#input-city");
const searchBtn = document.querySelector("#search-btn");
const cityName = document.querySelector("#city");
const countryName = document.querySelector("#country");
const temperature = document.querySelector("#temperature span");
const descripitionWeather = document.querySelector("#description");
const weatherIcon = document.querySelector("#weather-icon");
const humidity = document.querySelector("#humidity span");
const windSpeed = document.querySelector("#wind span");

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

        const res = await fetch(apiWeatherURL);
        const data = await res.json();

        console.log(data);
}

const showWeatherData = (city) => {
    getWeatherData(city);
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Search Here!");
    const city = inputCity.value;

    showWeatherData(city);
});

