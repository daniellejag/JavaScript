let weather = {};
console.log(weather);

weather = {
  temperature: 95,
  humidity: "61%"
};
console.log(weather.temperature);
console.log(weather.humidity);

weather.windSpeed = "11 mph";
console.log(weather.windSpeed);

console.log(weather["windSpeed"]);
console.log(weather["temperature"]);
console.log(weather["humidity"]);

let forecast = [
  {
    weekDay: "Monday",
    temperature: 95
  },
  {
    weekDay: "Tuesday",
    temperature: 90
  },
  {
    weekDay: "Wednesday",
    temperature: 87
  },
  {
    weekDay: "Thursday",
    temperature: 88
  },
  {
    weekDay: "Friday",
    temperature: 91
  },
  {
    weekDay: "Saturday",
    temperature: 93
  },
  {
    weekDay: "Sunday",
    temperature: 96
  }
];

console.log(forecast);
