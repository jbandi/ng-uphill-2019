import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/todo.model';
import { ToDoService } from '../../model/todo.service';

@Component({
  selector: 'td-done-todos',
  templateUrl: './done-screen.component.html',
})
export class DoneScreenComponent implements OnInit {

  loading = true;
  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.loadToDos();
  }

  removeToDo(todo: ToDo) {
    // TODO: Part of the exercise
    console.log('Not yet implemented ...');
  }

  private loadToDos() {
    this.todoService.getTodos(true)
      .subscribe(
        todos => {
          this.doneToDos = todos.filter(t => t.completed);
          this.loading = false;
        }
      );
  }
}
