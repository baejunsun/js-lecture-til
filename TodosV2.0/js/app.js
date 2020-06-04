// State

const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $checkbox = document.querySelector('.checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $btn = document.querySelector('.btn');
const $rel = document.querySelector('label[for=ck-complete-all]')

let todos = [];

const render = () => {
  let html = '';
  let todoCount = 0;
  todos.forEach(todo => {
    html +=
    `<li id = "${todo.id}" class = "todo-item">
    <input id = "ck-${todo.id} class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label for = "ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
    </li>`;
    if (todo.completed) todoCount++;
  });
  console.log(html);
  $todos.innerHTML = html;
  $completedTodos.innerHTML = todoCount;
  $activeTodos.innerHTML = todos.length - todoCount;
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);
console.log(generateId());


const addTodo = cont => {
  todos = [{ id: generateId(), content: cont, completed: false}, ...todos];
  console.log(todos);
  render();
};

const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  render();
};

const removeLi = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

const checkAll = () => {
  todos = todos.map(todo => ({ ...todo, completed : true}));
  render();
};
const releaseAll = () => {
  todos = todos.map(todo => ({ ...todo, completed : false}));
  render();
}

const removeAll = () => {
  todos = todos.filter(todo => !todo.completed);
  $checkbox.checked = false;
  
  render();
};



$inputTodo.onkeyup = e => {
  if (e.keyCode !== 13 || e.target.value.trim() === '') return;
  addTodo($inputTodo.value.trim());
  console.log($inputTodo.value);
  $inputTodo.value = '';
};

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id);
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > i')) return;
  removeLi(e.target.parentNode.id);
};

$checkbox.onchange = (e) => {
  if (e.target.checked) checkAll(e.target);
  else releaseAll(e.target);
};

$btn.onclick = (e) => removeAll(e.target);

