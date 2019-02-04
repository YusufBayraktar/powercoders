/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * Create and returns an 'li' element for inclusion in the shopping list
 *
 * @returns {HTMLElement} li element
 */


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
