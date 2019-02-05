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
		this.items_ = [
      new ShoppingListItem('first', '1'),
      new ShoppingListItem('second', '2'),
      new ShoppingListItem('third', '3'),
    ];


		/** @private {!View} View for this model. */
		this.view_ = new View(this, controller);

				this.view_.update();
	}
  get items() {
    return this.items_.slice();
  }
}
