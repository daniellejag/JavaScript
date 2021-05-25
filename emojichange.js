 function changecity() {
           let city =prompt("What city do you live in?");
           let temperature =prompt("What temperature is it?");
           
           if (temperature <= -1) {
               let h1 = document.querySelector("h1");
               h1.innerHTML = "🧤 <br />" + "Currently " + temperature + "°C " + "in " + city;
       } else {
           if (temperature >= 0) {
           let h1 = document.querySelector("h1");
           h1.innerHTML = "😎 <br />" + "Currently " + temperature + "°C " + "in " + city;
       }
    }
}
let changecityButton = document.querySelector("button");
         changecityButton = document.addEventListener("click", changecity);
