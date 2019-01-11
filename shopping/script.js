document.addEventListener('DOMContentLoaded', function (event) {
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');
  inputBox.focus();

  document.querySelector('button').addEventListener('click', function (event) {
    shoppingList.appendChild(createNewListItem(inputBox.value));
    inputBox.value = "";
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      shoppingList.appendChild(createNewListItem(inputBox.value));
      inputBox.value = "";
    }
    inputBox.focus();
  });
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
