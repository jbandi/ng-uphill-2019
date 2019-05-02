import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';

@Component({
  selector: 'td-done-todos',
  templateUrl: './done-screen.component.html',
})
export class DoneScreenComponent implements OnInit {

  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.loadToDos();
  }

  removeToDo(todo: ToDo) {
    this.doneToDos.splice(this.doneToDos.indexOf(todo), 1);
    this.todoService.saveDoneToDos(this.doneToDos);
  }

  private loadToDos() {
    this.doneToDos = this.todoService.loadToDos().done;
  }
}
