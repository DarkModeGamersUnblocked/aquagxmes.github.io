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
window.onload(
    doc.getElementsByTagName('link')[1].href = ls.getItem("iconcloak"),
    doc.title = ls.getItem("titlecloak")           
)
