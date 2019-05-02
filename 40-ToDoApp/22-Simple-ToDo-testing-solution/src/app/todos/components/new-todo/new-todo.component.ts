import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ToDo } from '../../model/todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'td-new-todo',
  templateUrl: './new-todo.component.html'
})
export class NewTodoComponent {
  form = new FormGroup({
    newToDoTitle: new FormControl('', [Validators.required, Validators.min(3)])
  });

  @Input() saving: boolean;
  @Output() addToDo = new EventEmitter<ToDo>();

  onAddToDo(): void {
    this.addToDo.emit(new ToDo(this.form.value.newToDoTitle));
    this.form.reset();
  }
}
