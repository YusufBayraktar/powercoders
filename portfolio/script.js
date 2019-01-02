function hide(event) {
    setClass('hide_list', 'hide');
    setClass('info_list', 'hide');
    setClass('show_list', 'show');
}

function show(event) {
    setClass('hide_list', 'show');
    setClass('info_list', 'show');
    setClass('show_list', 'hide');
}

function setClass(id, className) {
    let el = document.getElementById(id);
    el.className = className;
}
