const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gamePage = urlParams.get('game');
const gameIframe = document.getElementById("aquagame");
const title = document.getElementById('');
const author = document.getElementById('controlsinfo');

window.addEventListener('load', async() => {
 jso = await fetch('/js/games.json');
  gms = await jso.json();
  const dat = gms[gamePage]
  gameIframe.src = gms.iframe
  
})
