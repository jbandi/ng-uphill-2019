import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';

@Component({
  templateUrl: './todo-screen.component.html',
})
export class TodoScreenComponent implements OnInit {

  todos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.loadToDos();
  }

  addToDo(todo: ToDo) {
    this.todos.push(todo);
    this.todoService.saveToDos(this.todos);
  }

  completeToDo(todo: ToDo) {
    todo.completed = true;
    this.todoService.saveToDos(this.todos);
    this.loadToDos();
  }


  private loadToDos() {
    const todoContainer = this.todoService.loadToDos();
    this.todos = todoContainer.todos;
  }

}
