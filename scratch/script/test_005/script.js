document.addEventListener('keydown', function(event){
	let keyCode = event.keyCode;
	let el = document.getElementById('figure');

	if (keyCode == 39) {
		el.style.left = el.offsetLeft + 18 + 'px';
	}

	if (keyCode == 37) {
		el.style.left = el.offsetLeft - 18 + 'px';
	}
});

