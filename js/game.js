const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gamePage = urlParams.get('aqua');
const gameIframe = document.getElementById("aquagame");
const title = document.getElementById('GmeTitle');
const author = document.getElementById('GmeAuthor');
const pgeTitle = document.getElementById("OrgTitleName");
window.addEventListener('DOMContentLoaded', (event) => {
 jso = await fetch('/js/game.json');
  gms = await jso.json();
  const dat = gms[gamePage]
  gameIframe.src = dat.Iframe
  title.innerText = dat.Title
 author.innerText = dat.Author
  pgeTitle.innerText = gms.PageTitle
 });
