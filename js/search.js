function startSearch() {
  var input, filter, ul, li, a, i, gf;
  input = document.getElementById("srchbar");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".game");
  li = ul.getElementsByTagName("div");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
