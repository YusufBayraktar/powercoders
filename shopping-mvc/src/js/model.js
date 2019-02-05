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

		this.view_.update();
	}

/**
 * Appends a new item to the listItem
 *
 * @param item {!ShoppingListItem}
 */

  append(item) {
    this.items_.push(item);
    this.view_.update();
  }

  get items() {
    return this.items_.slice();
  }
}
