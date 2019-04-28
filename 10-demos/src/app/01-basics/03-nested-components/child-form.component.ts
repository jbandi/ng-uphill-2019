import {Component, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {IPerson} from './parent.component';

@Component({
  selector: 'aw-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss'],
})
export class ChildFormComponent {
  firstName: string;
  lastName: string;
  age: number;

  addCount = 0;

  @Output() addPerson = new EventEmitter<IPerson>();

  onAddPerson() {
    const newPerson = {firstName: this.firstName, lastName: this.lastName, age: this.age};
    this.addPerson.emit(newPerson);
    this.addCount++;
  }

  reset() {
    this.addCount = 0;
  }
}
