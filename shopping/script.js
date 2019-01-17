/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * should be a blank line between paragraphs
 *
 * @param {string} itemName Name of the item to add to the listText
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName) {
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  listText.textContent = itemName;
  const deleteButton = document.createElement('button');
  deleteButton.className = "fas fa-trash";
  deleteButton.addEventListener('click', function (event) {
    listItem.remove();
    document.querySelector('input').focus();
  });

  listItem.appendChild(listText);
  listItem.appendChild(deleteButton);
  return listItem;
}

document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const button = document.querySelector('button');
  inputBox.focus();
  button.disabled = true;

  button.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    button.disabled = trimmedValue === '';
    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
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
    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
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
