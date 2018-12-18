function setColor(event) {
let el = document.getElementById(event.srcElement.id);
if (el.className == 'sq byzantium') {
  el.className = 'sq'
} else {
  el.className += ' byzantium';
}
}
