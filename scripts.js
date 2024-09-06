window.onscroll = function() { addSticky() };

let header = document.getElementsByTagName("header");

let sticky = header.offsetTop;

function addSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}