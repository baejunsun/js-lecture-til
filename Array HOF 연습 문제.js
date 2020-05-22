// 4.새로운 요소추가
// let todos = [
//     { id: 3, content: 'HTML', completed: false },
//     { id: 2, content: 'CSS', completed: true },
//     { id: 1, content: 'Javascript', completed: false }
//   ];
  
//   function addTodo(newTodo) {
//     // todos.unshift(newTodo);                  
//     // todos = [newTodo].concat(todos);    
//     todos = [newTodo, ...todos];           
//   }
  
//   addTodo({ id: 4, content: 'Test', completed: false });
  
//    console.log(todos);
  /*
    [
      { id: 4, content: 'Test', completed: false },
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'Javascript', completed: false }
    ]
  */

// -------------------------------------------------------
// 5.특정 요소 삭제
// let todos = [
//     { id: 3, content: 'HTML', completed: false },
//     { id: 2, content: 'CSS', completed: true },
//     { id: 1, content: 'Javascript', completed: false }
//   ];
  
//   function removeTodo(id) {
//     // todos.splice(id - 1, 1);
//     todos = todos.filter(todo => todo.id !== id);
//   }
  
//   removeTodo(2);
  
//   console.log(todos);
//   /*
  //   [
  //     { id: 3, content: 'HTML', completed: false },
  //     { id: 1, content: 'Javascript', completed: false }
  //   ]
  // */

// -----------------------------------------------------------
// 6.특정 요소의 프로퍼티 값 반전
// let todos = [
//     { id: 3, content: 'HTML', completed: false },
//     { id: 2, content: 'CSS', completed: true },
//     { id: 1, content: 'Javascript', completed: false }
//   ];
  
//   function toggleCompletedById(id) {
//     // todos[id - 1].completed = todos[id - 1].completed !== true;
//     // return todos;
//     // return [...todos].

//     // todos = todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo));

//     todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, {completed: !todo.completed}) : todo));
    
//   }
  
//   toggleCompletedById(2);
  
//   console.log(todos);
  /*
    [
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: false },
      { id: 1, content: 'Javascript', completed: false }
    ]
  */


//   -------------------------------------------------
//  7. 모든 요소의 completed 프로퍼티 값을 true로 설정
 let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  // todos = todos.map( todo => ({ ...todo, completed: true}));
  todos = todos.map(todo => Object.assign({}, todo, {completed: true}));
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/

// --------------------------------------------------------
// 8.completed 프로퍼티의 값이 true 요소의 갯수 구하기
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
  
// function countCompletedTodos() {
//   return todos.filter(todo => todo.completed).length;
// }
  
// console.log(countCompletedTodos()); // 1


// ---------------------------------------------------------------
// 9.id 프로퍼티의 값 중에서 최대값 구하기
// let todos = [
  // { id: 3, content: 'HTML', completed: false },
  // { id: 2, content: 'CSS', completed: true },
  // { id: 1, content: 'Javascript', completed: false }
// ];

// function getMaxId() {
//   return todos.reduce((acc, cur) => (acc.id > cur.id ? acc : cur), todos[0]).id;
// }

// function getMaxId() {
//   return todos.length === 0 ? 0 : Math.max.apply(null, todos.map(todo => todo.id));
// }

// console.log(getMaxId()); // 3
