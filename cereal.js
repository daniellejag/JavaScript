 function mix() {
        let name= prompt("what is your name?");
        let cereal= prompt("What is your favorite cereal?");
        let fruit= prompt("What is your favorite fruit?");
        alert("Sounds yum, " + name + "! Try mixing " + "cereal" + " and " + fruit + " together!🥣");
    }

    let mixButton= document.querySelector(".mix-button");
    mixButton.addEventListener("click", mix);

