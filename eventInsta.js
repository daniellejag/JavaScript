function follow(event) {
    event.preventDefault(); 
    event.target.innerHTML = "Following";
}



let followLink = document.quertySelector("#follow");
followLink.addEventListener("click", follow);
