import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';
import {handleServerError} from '../util';

@Component({
  templateUrl: './todo-screen.component.html'
})
export class TodoScreenComponent implements OnInit {

  loading = true;
  saving = false;
  todos: ToDo[] = [];

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.loadToDos();
  }

  addToDo(todo: ToDo) {

    // OPTIMISTIC UI
    this.todos.push(todo);
    this.todoService.saveTodo(todo)
      .subscribe(
        persistedTodo => todo.id = persistedTodo.id,
        handleServerError
      );

    // // PESSIMISTIC UI
    // this.saving = true;
    // this.todoService.saveTodo(todo)
    //   .subscribe(
    //     persistedTodo => {
    //       this.todos.push(persistedTodo);
    //       this.saving = false;
    //     },
    //     handleServerError
    //   );
  }

  completeToDo(todo: ToDo) {

    // OPTIMISTIC UI
    this.todos.splice(this.todos.indexOf(todo), 1);
    todo.completed = true;
    this.todoService.updateTodo(todo)
      .subscribe(
        null, // do nothing
        handleServerError
      );

    // // PESSIMISTIC UI
    // todo.completed = true;
    // this.todoService.updateTodo(todo)
    //   .subscribe(
    //     () => this.todos.splice(this.todos.indexOf(todo), 1),
    //     handleServerError
    //   );
  }

  private loadToDos() {
    return this.todoService.getTodos(false)
      .subscribe(
        todos => {
          this.todos = todos;
          this.loading = false;
        }
      );
  }
}
