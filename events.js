    function applyHere() {
    let name = prompt("What is your name");
    let age = prompt("What is your age?");

    let h1 = document.querySelector("h1");
    if (age >= 18)  {
    h1.innerHTML = ("Hi, " + name +  "! Welcome to SheCodes!"); 
    } else {
        h1.innerHTML = ("Sorry, " + name + "! You cannot join SheCodes");
    }
}

    let  applyButton = document.querySelector("button");

    applyButton.addEventListener("click", applyHere);
