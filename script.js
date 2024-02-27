
var distance = prompt("Enter a value of distance in miles", "0");
var speed = prompt("Enter a value of time in minutes", "0");

distance1 = distance * 1609.34;
speed1 = speed * 60;
var avespeed = distance1/speed1 ;

document.getElementById("output").innerHTML = "Distance: " + distance + " miles";
document.getElementById("output2").innerHTML = "Speed: " + speed + " minutes";
document.getElementById("output3").innerHTML = "Average Speed: " + avespeed + " m/s";


