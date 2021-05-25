let apiKey = "b3a8312e8813d91f8ac0edd65adaa9c3";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let description = document.querySelector("#temperature-description");
    temperatureElement.innerHTML= `${temperature}℃`;
    description.innerHTML = response.data.weather[0].description;
}
let h1 = document.querySelector("#city");
h1.innerHTML = city;

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);