import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from '../../model/todo.model';

@Component({
  selector: 'td-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {

  @Input() todo: ToDo;
  @Output() removeToDo = new EventEmitter<ToDo>();

  onRemoveToDo() {
    this.removeToDo.emit(this.todo);
  }

}
