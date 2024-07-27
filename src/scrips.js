const navOpenButton = document.getElementById("bar-open-menu");
const navCloseButton = document.getElementById("bar-close-menu");
const sideNavPanel = document.getElementById("side-nav-panel");

navOpenButton.addEventListener("click",function(){
    sideNavPanel.classList.remove("hidden");
    document.querySelector(".wrapper").classList.add("bg-black/40")
    
})
navCloseButton.addEventListener("click", function(){
    sideNavPanel.classList.add("hidden");
    document.querySelector(".wrapper").classList.remove("bg-black/40")
})

