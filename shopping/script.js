document.addEventListener('DOMContentLoaded', function(event){
  document.querySelector('button').addEventListener('click', function(event){
    let el = document.querySelector('#item').value
    console.log(el);
  });
});
