import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  template: `
    <div>
      <div>
        {{title}}
      </div>
      <app-expression-changed-child [title]="title"></app-expression-changed-child>
    </div>
  `,
  styles: [`:host { display: block; background-color: #f2dede; padding: 5px
  }`]
})
export class ExpressionChangedComponent implements AfterViewChecked {

  title = 'Initial Parent Title';

  constructor() {
  }

  ngAfterViewChecked(): void {
    // this.title = 'Updated Title';
  }

}


// DEMO:
// - change state in ngAfterViewChecked
//   => Still working but error is thrown in dev build
//
// - change state of parent from child (i.e. ngOnInit)
//   => Dev build: UI of parent is updated but not propagated to children
//      -> UI does not reflect state consistently
//   => Prod build: UI of parent is not updated
//
// Solution: Design the unidirectional data flow properly!
//
// Possible hacks:
// - trigger update asynchronously: setTimeout(...)
// - call ChangeDetectionref.detectChanges after the update

