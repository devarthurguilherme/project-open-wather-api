//51928673cc87f91c0438f7adb5345f32 
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=51928673cc87f91c0438f7adb5345f32
const apiKey = "51928673cc87f91c0438f7adb5345f32";
const inputCity = document.querySelector("#input-city");
const searchBtn = document.querySelector("#search-btn");
const cityName = document.querySelector("#city");
const countryName = document.querySelector("#country");
const temperature = document.querySelector("#temperature span");
const descripitionWeather = document.querySelector("#description");
const weatherIcon = document.querySelector("#weather-icon");
const humidity = document.querySelector("#humidity span");
const windSpeed = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#weather-data")

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityName.innerText = data.name;
    temperature.innerText = parseInt(data.main.temp);
    descripitionWeather.innerText = data.weather[0].description;
    weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    humidity.innerText = `${data.main.humidity}`;
    windSpeed.innerText = `${data.wind.speed}km/h`;
    weatherContainer.classList.remove("hide");

    console.log(data.sys.country)
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = inputCity.value;
    showWeatherData(city);

});

inputCity.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;
        
        showWeatherData(city);
    };
});
