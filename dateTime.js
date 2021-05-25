let now= new Date();
let h2= document.querySelector("h2");

let date= now.getDate();
let hours= now.getHours();
let minutes= now.getMinutes();
let year= now.getFullYear();

// week days start at 0 being sunday and 6 being saturday 0-6

let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// same thing as days, ["Jan", "Feb"] etc, Jan is 0 and Dec is 11 0-11

let months =[]

let month= months[now.getMonth()];
h2.innerHTML= `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;
