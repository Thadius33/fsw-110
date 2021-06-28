// selectors
document.querySelector('form').addEventListener("submit", handleSubmitForm);
document.querySelector('ul').addEventListener('click', handledelete)

// event handler
function handleSubmitForm(e){
    e.preventDefault();
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    if (input1.value && input2.value != '');
        AddTodo(input1.value, input2.value);
        input1.value = ""
        input2.value = ""
}

function handledelete(e){
    if(e.target.name == 'deleteButt')
    deleteTodo(e);
}

//helper function
function AddTodo(todo1,todo2){
    var ul = document.querySelector("ul");
    var li = document.createElement("li");

    li.innerHTML = `
        <span class="todo-item">${todo1}: ${todo2}</span>
        <button name="deleteButt"><i class= "fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function deleteTodo(e){
    var item = e.target.parentNode;
    item.remove();
}

