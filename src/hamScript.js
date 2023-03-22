const hamButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

hamButton.addEventListener("click", navToggle);

function navToggle() {
    hamButton.classList.toggle("ham-open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
}