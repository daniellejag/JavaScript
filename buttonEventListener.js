function showTemperature() {
    let button = document.querySelector("button");
    button.innerHTML = "18 degrees";
}



let showTemperatureButton = document.querySelector("button");
showTemperature.addEventListener("click", showTemperature);
