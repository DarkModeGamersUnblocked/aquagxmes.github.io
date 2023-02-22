const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gamePage = urlParams.get('game');
const gameIframe = document.getElementById("aquagame");
const title = document.getElementById('GmeTitle');
const author = document.getElementById('GmeAuthor');

window.addEventListener('load', async() => {
 jso = await fetch('/js/game.json');
  gms = await jso.json();
  const dat = gms[gamePage]
  gameIframe.src = gms.iframe
  title.InnerHTML = gms.Title
 author.InnerHTML = gms.Author
  document.getElementById("OrgTitleName").InnerHTML = gms.PageTitle
})
