let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};

//Include the JavaScript file provided in your project,  when loading your project, ask the user "Enter a city" (example: Paris), alert "It is currently 19°C (66°F) in Paris with a humidity of 80%"If the city doesn't exist in the object (i.e: Sydney), alert "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney". Since this is an alert, the link shouldn't be clickable.


let userCity = prompt(`Enter a city`);


  
  if(weather[userCity] !== undefined) {
    alert(`It is currently ${weather[userCity].temp}°C (66°F) in ${userCity} with a humidity of ${weather[userCity].humidity}%`);
  } else {
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${userCity}`);
  }





















