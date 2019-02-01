/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * should be a blank line between paragraphs
 *
 * Create and returns an 'li' element for inclusion in the shopping list
 *
 * @returns {HTMLElement} li element
 *
 * Expressions of an item
 *
 * @param name {string} Name of the item
 * @param quantity {string} Quantity of the item
 * @constructor
 */
 function ShoppingListItem(name, quantity) {
     this.name = name;
     this.quantity = quantity;
 }

ShoppingListItem.prototype.toListItem = function () {
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const quantityOfProduct = document.createElement('span');
  listText.textContent = this.name;
  space = document.createTextNode(' ');
  quantityOfProduct.textContent = this.quantity;
  const deleteButton = document.createElement('button');
  deleteButton.className = "fas fa-trash";
  deleteButton.addEventListener('click', function (event) {
    listItem.remove();
    document.querySelector('input').focus();
  });

  listItem.appendChild(quantityOfProduct);
  listItem.appendChild(space);
  listItem.appendChild(listText);
  listItem.appendChild(deleteButton);
  return listItem;
}

document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const inputBoxQuantity = document.getElementById('theQuantity');
  const shoppingList = document.querySelector('ul');
  const button = document.querySelector('button');
  inputBox.focus();
  button.disabled = true;

  button.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    button.disabled = trimmedValue === '';
    const item = new ShoppingListItem(trimmedValue,
        inputBoxQuantity.value);
    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    inputBoxQuantity.value = '';
    button.disabled = true;
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    button.disabled = trimmedValue === '';
    if (trimmedValue === '') {
      return;
    }

   if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue,
        inputBoxQuantity.value);
    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    inputBoxQuantity.value = '';
    button.disabled = true;
    inputBox.focus();
  });

  const delAll = document.getElementById('del');
  delAll.addEventListener('click', function(event) {
    const lists = document.querySelectorAll('li');
    for (i = 0; i < lists.length; i++)
          lists[i].remove();
  });
});
