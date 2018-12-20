function hide(event) {
    setClass('V_we', 'hide');
    setClass('info_list_we_l', 'hide');
    setCLass('gt_we', 'show');
}

function show(event) {
    setClass('V_we', 'show');
    setClass('info_list_we', 'show');
    setClass('gt_we', 'hide');
}

function setClass(id, className) {
    let el = document.getElementById(id);
    el.className = className;
}
