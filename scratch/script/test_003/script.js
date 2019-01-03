alert('clickTHeCharacter');

function hide(event) {
  setClass('w', 'hide');
  setClass('piece', 'hide');
  setClass('light', 'show');
  setClass('e', 'show');
  setClass('body', 'violet'); 
}

function show(event) {
  setClass('w', 'show');
  setClass('piece', 'show');
  setClass('light', 'hide');
  setClass('e', 'hide');
  setClass('body', 'lightgrey'); 

}

function setClass(id, className) {
  document.getElementById(id).className = className;
}