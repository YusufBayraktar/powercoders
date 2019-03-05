document.addEventListener('DOMContentLoaded', function(event){
  document.getElementById('button').addEventListener('click', function(){
    document.getElementById('tobe').className = 'nottobe';
    document.getElementById('err').className = ''
  });
});
