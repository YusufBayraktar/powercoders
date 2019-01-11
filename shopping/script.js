document.addEventListener('DOMContentLoaded', function (event) {
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');
  let button = document.querySelector('button');
  inputBox.focus();

  button.addEventListener('click', function (event) {
    if (inputBox.value.trim() !== '') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
    }
    inputBox.focus();
    if (inputBox.value.trim() === '') {
        button.disabled = true;
    }
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
      button.disabled = false;
      if (event.key === 'Enter') {
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
    if (inputBox.value.trim() === '') {
        button.disabled = true;
    }
  });
  inputBox.focus();

});
// inputBoxValue
function createNewListItem(itemName) {
  let listItem = document.createElement('li');
  let listText = document.createElement('span');
  listText.textContent = itemName;
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.addEventListener('click', function (event) {
    listItem.remove();
  });

  listItem.appendChild(listText);
  listItem.appendChild(deleteButton);
  return listItem;
}
