/**
 * Controller for the shopping list application.
 */
class Controller {
	constructor() {
		/** @private {!Model} Application model */	// "!" exclamation mark means this value cannot be null
		this.model_ = new Model(this); // here "_" underscore means this is a private object domot change it!
	}

/**
 * Add an item to the shopping list.
 *
 * @param name {string} Name of the item to add, maz not be empty
 * @param quantity {string} The quantity of the item to add, mzy be empty
 */

	 addItem(name, quantity) {
		 const item = new ShoppingListItem(name, quantity);
		 this.model_.append(item);
	 }

	 /**
	 * Delete the i'th  item from the list
	 *
	 * @param i {number}
	 */

	 deleteItem(i) {
		 this.model_.delete(i);
	 }
}
