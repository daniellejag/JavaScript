function sayHooray() {
    alert("Hooray!");
}

let clickMeButton = document.querySelector("#special-button");
clickMeButton.addEventListener("click", sayHooray);

// challenge 2 alert password
function showPassword(event) {
    event.preventDefault();
let passwordInput = document.querySelector("#password-input");
alert(`Your super secret password is ${passwordInput.value}`);
}


let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", showPassword);

// challenge 3 alert the value of username and email inputs when submitting the form
function showSignUpFormValues(event) {
    event.preventDefault();
    let emailInput = document.querySelector("#email-input")
    let usernmaeInput = document.querySelector("username-input")
    alert(`Your email is ${emailInput.value}`);
    alert(`Your username is ${usernameInput.value}`);
}



let signupForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", showSignUpFormValues);
