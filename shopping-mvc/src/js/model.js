/**
 * Shopping list model
 *
 * The list item modelled as an array.
 */
class Model {
  /** @param controller */
	constructor(controller) {
		console.log('model initialised!');
		/** @private {!ShoppingListItem[]} Items in the list */
		this.items_ = [];

		/** @private {!View} View for this model. */
		this.view_ = new View(this, controller);
	}
}
