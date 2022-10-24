// Sticky header
window,onscroll = function() {myFunction()};

var navbar = document.getElementById("sticky-top");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-top")
    } else {
        navbar.classList.remove("sticky-top");
    }
}