
export const updateLS = () => {
    const todosEL = document.querySelectorAll('li');

    const todos = [];

    todosEL.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
};