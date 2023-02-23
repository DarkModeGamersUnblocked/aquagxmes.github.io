const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gamePage = urlParams.get('aqua');
const gameIframe = document.getElementById("aquagame");
const title = document.getElementById('GmeTitle');
const author = document.getElementById('GmeAuthor');
const pgeTitle = document.getElementById("OrgTitleName");
 const doc = document;
const ls = localStorage;
window.addEventListener('DOMContentLoaded',async()=>{
 jso = await fetch('/js/game.json');
  gms = await jso.json();
  const dat = gms[gamePage]
  gameIframe.src = dat.Iframe
  title.innerHTML = dat.Title
 author.innerHTML = dat.Author
  pgeTitle.innerHTML = dat.PageTitle
        if (ls.getItem("default") == 'false') {
        doc.getElementsByTagName('link')[1].href = ls.getItem("iconcloak"),
    doc.title = ls.getItem("titlecloak") 
        } else if (ls.getItem("default") == 'true'){
                doc.getElementsByTagName('link')[1].href = "https://aquagxmes.github.io/img/aqua.ico",
                doc.title = doc.getElementById('OrgTitleName').innerHTML
        }
 })
