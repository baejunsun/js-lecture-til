// State

const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $completeAll = document.querySelector('#ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

// todos.를 전역에서 선언한 이유 : 쓰게될 모든 함수들이 todos를 의지한다.

let todos = [];
let active = [];
let completed = [];
let navState ='all';

const getTodos = () => {
  todos = [];
  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = cont => {
  todos = [{ id: generateId(), content: cont, completed: false}, ...todos];
  console.log(todos);
};

const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
};

const completeAll = completed => {
  todos = todos.map(todo => ({ ...todo, completed }));
};

const clearCompleted = () => {
  todos = todos.filter(todo => !todo.completed);
  $completeAll.checked = false;
};


const render = () => {
  let html = '';
  if (navState === 'active') {
    active = todos.filter(todo => !todo.completed);
  }
  if (navState === 'completed') {
    completed = todos.filter(todo => todo.completed);
  }
  (navState === 'all' ? todos : (navState === 'active' ? active : completed)).forEach(todo => {
    html +=
    `<li id = "${todo.id}" class = "todo-item">
    <input id = "ck-${todo.id} class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label for = "ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });
  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

window.onload = getTodos;


$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13 || e.target.value.trim() === '') return;
  addTodo($inputTodo.value.trim());
  console.log($inputTodo.value);
  $inputTodo.value = '';
  render();
};

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id);
  render();
};

$todos.onclick = e => {
  if (!e.target.matches('.remove-todo')) return;
  removeTodo(e.target.parentNode.id);
  render();
};

$completeAll.onchange = (e) => {
  completeAll($completeAll.checked);
  render();
};

$clearCompleted.onclick = (e) => {
  clearCompleted(e.target);
  render();
};

$nav.onclick = ({target}) => {
  if (!target.matches('.nav > li ')) return;

  const $active = $nav.querySelector('.active');
  if ($active === target) return;
  $active.classList.remove('active');
  target.classList.add('active');
  navState = target.id;
  render();
};
