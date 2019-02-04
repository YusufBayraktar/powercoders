/**HTML View for the ShoppingList. */
class View {
	/**
	* @param model {!Model} App data model
	* @param controller {!Controller} App controller
	*/
	constructor(model, controller) {
		console.log('view is ready');

		/** @private {!Model} App data model */
		this.model_ = model;

		/*** @private {!Controller} App controller */
		this.controller_ = controller;
	}
}
