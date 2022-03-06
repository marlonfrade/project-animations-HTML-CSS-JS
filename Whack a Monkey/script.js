var hole1 = document.getElementById("hole1");
var hole2 = document.getElementById("hole2");
var hole3 = document.getElementById("hole3");
var hole4 = document.getElementById("hole4");

var mon1 = document.getElementById("mon1");
var mon2 = document.getElementById("mon2");
var mon3 = document.getElementById("mon3");
var mon4 = document.getElementById("mon4");
var points = document.getElementById("points");
points = 0;
//var myVar = setTimeout(myClick, 3000);
mon1.onclick = () => {
  document.getElementById("hole1").style.backgroundColor = "red";
  points += 2;
  document.getElementById("points").innerHTML = points;
  setTimeout(function () {
    document.getElementById("hole1").style.backgroundColor = "black";
  }, 1000);
};
mon2.onclick = () => {
  document.getElementById("hole2").style.backgroundColor = "red";
  points += 2;
  document.getElementById("points").innerHTML = points;
  setTimeout(function () {
    document.getElementById("hole2").style.backgroundColor = "black";
  }, 1000);
};

mon3.onclick = () => {
  document.getElementById("hole3").style.backgroundColor = "red";
  points += 2;
  document.getElementById("points").innerHTML = points;
  setTimeout(function () {
    document.getElementById("hole3").style.backgroundColor = "black";
  }, 1000);
};
mon4.onclick = () => {
  document.getElementById("hole4").style.backgroundColor = "red";
  points += 2;
  document.getElementById("points").innerHTML = points;
  setTimeout(function () {
    document.getElementById("hole4").style.backgroundColor = "black";
  }, 1000);
};
