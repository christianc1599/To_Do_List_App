function newItem() {
    let listItem = document.createElement('li');
    let inputValue = document.getElementbyId('input').value;
    let text = document.createTextNode(inputValue);
    listItem.appendChild(text);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let list = document.querySelector('#list');
        list.appendChild(listItem)
    }


    
}