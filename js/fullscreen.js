var elem = document.getElementById("aquagame");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
var gameurl = document.getElementsById("aquagame").src;

localStorage.setItem('gamelink', sometext);
function changeMethod(link) {
  document.getElementsById("aquagame").src = link
}
