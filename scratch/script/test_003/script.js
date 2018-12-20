function hide(event) {
  setClass('hide-icon', 'hide');
  setClass('info', 'hide');
  setClass('show-icon', 'show');
}

function show(event) {
  setClass('hide-icon', 'show');
  setClass('info', 'show');
  setClass('show-icon', 'hide');
}


function setClass(id, className) {
    let el = document.getElementById(id);
    el.className = className;

}
