var r1 = Math.floor(Math.random() * 6) + 1;
var r2 = Math.floor(Math.random() * 6) + 1;
document.getElementById("first").innerHTML = r1;
document.getElementById("second").innerHTML = r2;
if (r1 > r2) {
  document.querySelector("h1").innerHTML = "Player 1 won";
}
else if (r1 < r2) {
  document.querySelector("h1").innerHTML = "Player 2 won";
}
else
  document.querySelector("h1").innerHTML = "Draw !";
function refreshPage() {
  window.location.reload();
}
