const menu_button = document.getElementById("menu_button");
const menu_overlay = document.getElementById("menu_overlay");

const toggleOverlay = function (){ 
    if (menu_overlay.classList.contains("show")) {
        menu_overlay.classList.remove("show");
        menu_overlay.classList.add("hide");
    } else { 
        menu_overlay.classList.remove("hide");
        menu_overlay.classList.add("show"); }
};


menu_button.addEventListener("click", toggleOverlay);