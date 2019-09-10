//Övning funktioner

var body = document.querySelector("body");

function caps() {
var namn = document.getElementById("name").value; //Hämta värdet i inputrutan
namn = namn.toUpperCase(); //konvertera till stora bokstäver
document.getElementById("name").value = namn; //Returnera stora bokstäver till inputrutan

}