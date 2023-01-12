function startSearch() {
  var input, filter, ul, a, i, gf;
  input = document.getElementById("srchbar");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".gamescontainer");
  for (i = 0; i < ul.length; i++) {
    a = ul[i].getElementsByTagName("p")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      ul[i].style.position = "relative";
    } else {
      ul[i].style.position = "none";
    }
  }
}
