function edit(){
    let newData = document.getElementById('toAdd').value;        
    let newLine = document.createElement('div');        
        newLine.appendChild(document.createTextNode(newData));
        document.body.appendChild(newLine);   
}