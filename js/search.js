function startSearch() {
  var input, filter, ul, li, a, i, gf;
  input = document.getElementById("srchbar");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".gamescontainer");
  li = ul.querySelector(".game");
  gf = li.querySelector(".gamecontent");
  for (i = 0; i < li.length; i++) {
    a = gf[i].getElementsByTagName("p")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
