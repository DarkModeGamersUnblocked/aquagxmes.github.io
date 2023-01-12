function startSearch() {
  var input, filter, ul, a, i, gf;
  input = document.getElementById("srchbar");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".gamescontainer");
  for (i = 0; i < li.length; i++) {
    a = ul[i].getElementsByTagName("p")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.position = "relative";
    } else {
      li[i].style.position = "none";
    }
  }
}
