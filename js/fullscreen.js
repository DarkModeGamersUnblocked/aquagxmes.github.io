var elem = document.getElementByID("aquagame");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

localStorage.setItem('gamelink', document.getElementsByID("aquagame").src);
function changeMethod(link) {
  document.getElementsByID("aquagame").src = link
}
