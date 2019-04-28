import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({

  selector: 'aw-comp-toggle',
  styles: [
    ':host {display: block; border: 1px solid silver; padding: 20px}',
    '.toggle-content {display: block; border: 1px solid silver; padding: 20px; background-color: lavender}'
  ],
  template: `
    <div>
      This is a toggle with content.
    </div>

    <div class="toggle-content">
      <ng-content></ng-content>
    </div>
  `
})
export class ToggleComponent {

  @Input() on = true;
  @Output() toggle = new EventEmitter<boolean>();

  toggleState() {
    this.on = !this.on;
    this.toggle.emit(this.on);
  }
}
