import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aw-on-push-child-object',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>{{message.value}}</h3>
  `
})

export class OnPushChildObjectComponent {
  private _message = {value: ''};

  @Input() set message(val) {
    this._message = val;
  }
  get message() {
    return this._message;
  }
}
