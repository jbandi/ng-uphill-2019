import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'aw-on-push-child-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3 *ngIf="message">{{message}}</h3>
  `
})

export class OnPushChildValueComponent {
  private _message = '';

  @Input() set message(val) {
    this._message = val;
  }
  get message() {
    return this._message;
  }
}
