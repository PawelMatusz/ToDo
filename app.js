const form = document.querySelector('.add');
const h1 = document.querySelector('.number');
const ul = document.querySelector('.tasks')

const removeTask = (e) => {
    e.target.parentNode.remove();
}

const addTasks = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const titleTask = input.value;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button> Delete </button>';
    ul.appendChild(task);
    input.value = '';
    task.querySelector('button').addEventListener('click', removeTask);

}


form.addEventListener('submit', addTasks)