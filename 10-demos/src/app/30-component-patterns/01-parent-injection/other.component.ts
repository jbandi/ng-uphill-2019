import {Component, OnInit} from '@angular/core';
import {InjectionParentComponent} from './injection-parent.component';

@Component({
  selector: 'aw-comp-other',
  styles: [':host {display: block; border: 1px solid silver; padding: 20px}'],
  template: `
    <h3>An other component</h3>
    <div>Other: Message from parent -> {{message}}</div>
  `
})

export class OtherComponent implements OnInit {

  message: string;

  constructor(private parent: InjectionParentComponent) {
  }

  ngOnInit() {
    this.parent.notifications.subscribe(
      v => this.message = v
    );
  }
}
