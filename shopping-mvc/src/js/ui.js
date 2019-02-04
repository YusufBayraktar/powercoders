/**
 * Create the controller to run application.
 */
function domContentLoaded () {
	new Controller();
}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function (event) {
		domContentloaded();
		});
	} else {
		domContentLoaded();
	}
