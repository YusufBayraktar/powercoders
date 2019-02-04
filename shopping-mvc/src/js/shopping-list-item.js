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
  *
  *
  */
  toListItem() {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const quantityOfProduct = document.createElement('span');
    listText.textContent = this.name;
    //space = document.createTextNode(' ');
    quantityOfProduct.textContent = this.quantity;
    const deleteButton = document.createElement('button');
    deleteButton.className = "fas fa-trash";
    deleteButton.addEventListener('click', function (event) {
      listItem.remove();
      document.querySelector('input').focus();
    });

    listItem.appendChild(quantityOfProduct);
    //listItem.appendChild(space);
    listItem.appendChild(listText);
    listItem.appendChild(deleteButton);
    return listItem;
  }
}
