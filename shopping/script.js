document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
    let inputBox = document.getElementById('item');
    document.querySelector('ul').appendChild(createNewListItem(inputBox.value));
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      let inputBox = document.getElementById('item');
      document.querySelector('ul').appendChild(createNewListItem(inputBox.value));
    }
  });
});

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
