/*
*
* @param {name {string}, quantity {string}} item
*
* Represents an item in the shopping list.
*/
class ShoppingListItem {
  /**
  *
  *@param name {string} Name
  *@param quantity {string} qauntity
  */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
  * Creates and returns an 'li' element for inclusion in the shopping list.
  *
  * @returns {!HTMLElement} li element
  */
  toListItem() {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const quantityOfProduct = document.createElement('span');
    listText.textContent = this.name;
    quantityOfProduct.textContent = this.quantity;
    const deleteButton = document.createElement('button');
    deleteButton.className = "fas fa-trash";
    listItem.appendChild(quantityOfProduct);
    listItem.appendChild(listText);
    listItem.appendChild(deleteButton);
    return listItem;
  }
}
