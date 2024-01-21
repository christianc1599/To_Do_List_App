     function newItem() {
        let li = $('<li></li>')
        let inputValue = $('#input').val();
        li.append(inputValue);//adding new item to the list

        if ($('#input').val() === '') {
            alert('You must write something!');
        } else {
            let list = $('#list');
            list.append(li);
        }//gives an error message if the user does not enter something to the list

        li.on('dblclick', function (){
          li.toggleClass('strike')
        });//Allows you to double click on an item to strike it out as completed 

        let crossOutButton = $('<button></button>')
        crossOutButton.append('X');
        li.append(crossOutButton);//added delete button

        crossOutButton.on('click', function() {
          li.addClass('delete');
        });//adds class to CSS that has display:none when an item is deleted from the list

        $('#list').sortable();//Allows you to reorder items
        $('#input').val('');//takes the input that was typed and adds it to the list 
    }
