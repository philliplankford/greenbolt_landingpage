const menu_button = document.getElementById("menu_button");
const menu_overlay = document.getElementById("menu_overlay");
const body = document.getElementById("body");

const toggleOverlay = function (){ 
    menu_overlay.classList.toggle("show") ? menu_button.src="./img/x.svg" : menu_button.src="./img/menu_icon.svg";
    body.classList.toggle("noflow");
};

menu_button.addEventListener("click", toggleOverlay);