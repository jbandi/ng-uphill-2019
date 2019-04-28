import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IPerson} from './parent.component';

@Component({
  selector: 'aw-child-list',
  styleUrls: ['child-list.component.scss'],
  template: `
    <div class="child-list-header">Child List</div>
    <ul>
      <li *ngFor="let child of children">
        {{child.firstName}} {{child.lastName}}, {{child.age}}
      </li>
    </ul>
  `
})
export class ChildListComponent {

    @Input() children: IPerson[];

}
