import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach ( todo => crearTodoHtml ( todo )); **** esto es igual a la linea de abajo solo funciona con un argumento!!!  ****
todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );


