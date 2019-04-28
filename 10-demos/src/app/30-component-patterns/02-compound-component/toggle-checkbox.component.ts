import {Component} from '@angular/core';
import {ToggleComponent} from './toggle.component';

@Component({
  selector: 'aw-comp-checkbox',
  template: `
    <input type="checkbox" [checked]="toggle.on" (change)="toggle.toggleState()">
  `
})
export class ToggleCheckboxComponent {
  constructor(public toggle: ToggleComponent) {
  }
}
