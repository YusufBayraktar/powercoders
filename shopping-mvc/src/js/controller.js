/**
 * Controller for the shopping list application.
 */
class Controller {
	constructor() {
		console.log('controller works');
		/** @private {!Model} Application model */	// "!" exclamation mark means this value cannot be null
		this.model_ = new Model(this); // here "_" underscore means this is a private object domot change it!
	}
}
