/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * should be a blank line between paragraphs
 *
 * @param {string} {{name: string, quantity: stirng}} item Item to append to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(item) {
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const quantityOfProduct = document.createElement('span');
  listText.textContent = item.name;
  space = document.createTextNode(' ');
  quantityOfProduct.textContent = item.quantity;
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
    const item = {
        name: inputBox.value.trim(),
        quantity: document.getElementById('theQuantity').value
      };
    shoppingList.appendChild(createNewListItem(item));
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

    const item = {
        name: inputBox.value.trim(),
        quantity: document.getElementById('theQuantity').value
      };
    shoppingList.appendChild(createNewListItem(item));
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
