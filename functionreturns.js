function isWindy(speed, unit) {
if (speed > 5 && unit === "metric") {
return true;
} else { 
return false
}
} 

let speed = prompt("what is the wind speed");
let unit = prompt("In what unit? (metric or imperial?)");

if (isWindy(speed)) {
alert("It is windy");
} else { 
alert("It is not windy");
} 
