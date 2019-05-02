import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';
import {handleServerError} from '../util';

@Component({
  selector: 'td-done-todos',
  templateUrl: './done-screen.component.html',
})
export class DoneScreenComponent implements OnInit {

  loading = true;
  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.loadToDos();
  }

  removeToDo(todo: ToDo) {

    // OPTIMISTIC UI
    this.doneToDos.splice(this.doneToDos.indexOf(todo), 1);
    this.todoService.deleteTodo(todo)
      .subscribe(
        null, // do nothing
        handleServerError
      );


    // // PESSIMISTIC UI
    // this.todoService.deleteTodo(todo)
    //   .subscribe(
    //     () => this.doneToDos.splice(this.doneToDos.indexOf(todo), 1),
    //     handleServerError
    //   );
  }

  private loadToDos() {
    this.todoService.getTodos(true)
      .subscribe(
        todos => {
          this.doneToDos = todos;
          this.loading = false;
        }
      );
  }
}
