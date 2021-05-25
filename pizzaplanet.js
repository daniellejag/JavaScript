   function subscribe() {
        let name= prompt("Hey there 👋! What is your space name?");
        let lactose= prompt("Do you like cheese?");
        
        if (lactose==="no") {
            let awkward= prompt("No worries " + name + "🐄, this was never really about cheese anyways. Share your email to learn more theories, possibly lettuce theory next? 🌱");
        }else{
        let food= prompt("What is your favorite food that has cheese? 🧀🍕🍔");
        let email= prompt("What is your email address?")
        alert(name + ", ruler of planet " + food + "! Don't forget to check your cheesebox. ✉️ ");

        
        alert ("Thanks!");
    }
}
        let subscribeButton= document.querySelector(".subscribe");
        subscribeButton.addEventListener("click", subscribe);
