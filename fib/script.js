function fib(x){
  let list = [1, 1]
  let y;
  for(i=2; i <= x; i++){
    y = list[list.length-1] + list[list.length-2];
    list.push(y);
  }
  return list[x - 1]
}

function gr(x){
  let list = [1, 1]
  let y;
  for(i=2; i <= x; i++){
    y = list[list.length-1] + list[list.length-2];
    list.push(y);
  }
  goldenRatio = list[list.length-2] / list[list.length-1]
  return goldenRatio
}

document.addEventListener('DOMContentLoaded', function(event){
  document.querySelector('button').addEventListener('click', function(){
    if (document.querySelector('input').value < 0 || 100 < document.querySelector('input').value){
      alert("parameter is out of range, please choose a number (0, 100)");
      throw "parameter is out of range";
    } else {
        document.querySelector('output').value = document.querySelector('input').value + "." +
                            " fibonacciNumber: " + fib(document.querySelector('input').value) +
                            "," + " goldenRatio: " + gr(document.querySelector('input').value);
        document.querySelector('input').value = '';
        }
  });
  document.querySelector('input').addEventListener('keyup', function(event){
    if (document.querySelector('input').value === ''){
      return;
    }
    if (event.key !== 'Enter') {
      return;
    }
    if (document.querySelector('input').value < 0 || 100 < document.querySelector('input').value){
      alert("parameter is out of range, please choose a number (0, 100)");
      throw "parameter is out of range";
    } else {
        document.querySelector('output').value = document.querySelector('input').value + "." +
                           " fibonacciNumber: " + fib(document.querySelector('input').value) +
                            "," + " goldenRatio: " + gr(document.querySelector('input').value);
        document.querySelector('input').value = '';
        }
  });
});
