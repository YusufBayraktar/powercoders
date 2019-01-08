document.addEventListener('DOMContentLoaded', function(event){
  document.querySelector('button').addEventListener('click', function(event){
    let el = document.getElementById('item');
    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    listText.textContent = el.value;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', function(){
      listItem.remove();
    });

    listItem.appendChild(listText);
    listItem.appendChild(deleteButton);
    document.querySelector('ul').appendChild(listItem);
    return listItem;
  });
});
