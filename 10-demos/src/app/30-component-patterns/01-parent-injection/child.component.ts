import {Component, OnInit} from '@angular/core';
import {InjectionParentComponent} from './injection-parent.component';
import {OtherComponent} from './other.component';

@Component({
  selector: 'aw-comp-child',
  styles: [':host {display: block; border: 1px solid silver; padding: 20px}'],
  template: `
    <h3>A child component</h3>
    <div>Child: Message from parent -> {{message}}</div>
  `
})

export class ChildComponent implements OnInit {
  message: string;

  constructor(private parent: InjectionParentComponent) {
  }

  ngOnInit() {
    this.parent.notifications.subscribe(
      v => this.message = v
    );
  }
}
