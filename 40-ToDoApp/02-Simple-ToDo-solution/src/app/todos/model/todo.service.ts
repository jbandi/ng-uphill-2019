import {Injectable} from '@angular/core';
import {ToDo} from './todo.model';

const TODOS_KEY = 'TODO_APP.todos';

interface TodoContainer {
  todos: Array<ToDo>;
  done: Array<ToDo>;
}

const pendingToDosFilter = todos => todos.filter(todo => todo.completed === false);
const doneToDosFilter = todos => todos.filter(todo => todo.completed === true);

@Injectable({providedIn: 'root'})
export class ToDoService {

  loadToDos(): TodoContainer {
    const loadedToDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];

    const allTodos = loadedToDos
      .map((json: {_title: string, completed: boolean}) => {
      const todo = new ToDo(json._title);
      todo.completed = json.completed;
      return todo;
    });

    const todos = allTodos.filter(t => t.completed === false);
    const done = allTodos.filter(t => t.completed === true);

    return {todos, done};
  }

  saveToDos(todos: Array<ToDo>): void {

    const doneToDos = this.loadToDos().done;
    const newDoneToDos = doneToDosFilter(todos);
    const pendingTodos = pendingToDosFilter(todos);

    localStorage.setItem(TODOS_KEY, JSON.stringify([...pendingTodos, ...newDoneToDos, ...doneToDos]));
  }

  saveDoneToDos(doneToDos: ToDo[]) {

    const pendingToDos = this.loadToDos().todos;

    localStorage.setItem(TODOS_KEY, JSON.stringify([...pendingToDos, ...doneToDos]));
  }
}

