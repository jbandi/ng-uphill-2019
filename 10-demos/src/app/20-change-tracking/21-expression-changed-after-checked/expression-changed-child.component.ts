import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ExpressionChangedComponent} from './expression-changed.component';

@Component({
  selector: 'app-expression-changed-child',
  template: `
    <p>
      Child: {{title}}
    </p>
  `,
  styles: [`:host {display: block; background-color: lightblue; margin: 10px; padding: 10px}`]
})
export class ExpressionChangedChildComponent implements OnInit {

  @Input() title = 'Initial child title';

  constructor(private parent: ExpressionChangedComponent) { }

  ngOnInit() {
    // this.parent.title = 'Update From Child!';
  }

}
