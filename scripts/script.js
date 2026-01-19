// JavaScript Document


// Openen menu
var openButton = document.querySelector("header button");

openButton.addEventListener("click", openMenu);



function openMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.toggle("toonMenu");
    console.log("toonMenu");
}



// stap 1 - sluiten menu
var sluitButton = document.querySelector("nav button");

sluitButton.addEventListener("click",sluitMenu)

function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}