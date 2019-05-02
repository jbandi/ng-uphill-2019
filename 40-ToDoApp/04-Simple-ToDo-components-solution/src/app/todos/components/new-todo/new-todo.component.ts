import {Component, EventEmitter, Output} from '@angular/core';
import {ToDo} from '../../model/todo.model';

@Component({
  selector: 'td-new-todo',
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {

  public newToDoTitle = '';

  @Output() addToDo = new EventEmitter<ToDo>();

  onAddToDo(): void {
    this.addToDo.emit(new ToDo(this.newToDoTitle));
    this.newToDoTitle = '';
  }

}
