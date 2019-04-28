import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToDo} from '../../model/todo.model';

@Component({
  selector: 'td-new-todo',
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {

  newToDoTitle = '';

  @Output() addToDo = new EventEmitter<ToDo>();

  onAddToDo() {
    const newToDo = new ToDo(this.newToDoTitle);
    this.addToDo.emit(newToDo);
    this.newToDoTitle = '';
  }

}
