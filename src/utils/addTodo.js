
export const addTodo = (todo) => {

    // const todos = JSON.parse(localStorage.getItem('todos'));

    // if(todos) {
    //     todos.forEach(todo => addTodo(todo));
    // };

    const todosUl = document.getElementById('todos');
    const todoEl  = document.createElement('li');

    todoEl.innerText = todo;

    todoEl.addEventListener('click', () => {
        todoEl.classList.add('completed');
    });

    todoEl.addEventListener('dblclick', () => {
        todoEl.remove();
    });

    todosUl.appendChild(todoEl);

    // updateLS();
}