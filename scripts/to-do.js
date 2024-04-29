const todoList = JSON.parse(localStorage.getItem('todoList')) || 
[{
    name: '', 
    dueDate: ''
}];

renderTodoList();

function renderTodoList() {    
    let todoListHTML = '';

    for (i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick=" 
                    todoList.splice(${i}, 1);
                    saveTodo(todoList);
                    renderTodoList();
            " class="delete-todo-button">Delete</button>
        `;

        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    saveTodo(todoList);
    renderTodoList();
}

function saveTodo(todoList) {
    const sringTodoList = JSON.stringify(todoList);
    localStorage.setItem('todoList', sringTodoList);
}