document.addEventListener("DOMContentLoaded", function(event) { 
        doc.getElementsByTagName('link')[1].href = ls.getItem("iconcloak"),
    doc.title = ls.getItem("titlecloak")     
    console.log(document.cookie);
    var visit = getCookie("cookie");
    if (visit == null) {
        document.getElementById("overlay").style.display = "block";
        var expire = new Date();
        expire = new Date(expire.getTime() + 7776000000);
        document.cookie = "cookie=here; expires=" + expire;
    }
});

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    
    return c_value;
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
const doc = document
const ls = localStorage
function setico(urle) {
    ls.setItem("iconcloak", urle)
}
function setitle(urle) {
    ls.setItem("titlecloak", urle)
}
function toggleSettings() {
if (doc.getElementById("settings").style.display == "none"){
    doc.getElementById("settings").style.display = ""
} else if (doc.getElementById("settings").style.display == ""){
    doc.getElementById("settings").style.display = "none"
    }
}
function TitleSetting(thing) {
    setitle(thing),
    doc.title = ls.getItem("titlecloak")
}
function DefaultSetting() {
    ls.setItem("tabcloak", 'https://aquagxmes.github.io/img/aqua.ico'),
    doc.getElementsByTagName('link')[1].href = ls.getItem("iconcloak")
}
function IconSetting(thing) {
    setico(thing),
    doc.getElementsByTagName('link')[1].href = ls.getItem("iconcloak")
}
