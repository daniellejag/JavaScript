function showTemperature(response) {
    //console.log(response.data.name);
    //console.log(`The temperatue in ${response.data.name} is: ${response.data,main.temp}℃`);
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    let message = `It is ${temperature} degrees in ${city}`;
    let h1 = document.querySelector("h1");
    console.log(h1);
    console.log(message);
}

let apiKey = "b3a8312e8813d91f8ac0edd65adaa9c3";
let units = "metric";
let city = "Sydney";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);