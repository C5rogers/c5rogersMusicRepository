var menu = document.getElementById("menu");
menu.addEventListener("click", function() {
    document.getElementById("nav").style.left = "0";
});
var exit = document.getElementById("exit");
exit.addEventListener("click", function() {
    document.getElementById("nav").style.left = "-100%";
});