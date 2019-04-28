import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {delay1} from './util';

@Component({
  selector: 'aw-change-other-child',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <h3>Other Child</h3>
    <div>{{message}}</div>

    <div>{{value | json}}</div>
  `,
  styles: [`:host {display: block; background-color: lightblue; padding: 5px}`]
})
export class ChangeTrackingOtherChildComponent implements OnInit {

  private _message = 'Hello World';

  @Input() value = 0;

  get message() {
    // console.log('Other Child -> Message Getter');
    // delay1(1000);
    return this._message;
  }

  ngOnInit(): void {
  //   setInterval(() => this._message = new Date().toISOString(), 2000);
  }

  // DEMO: Implement OnChange and DoCheck hooks
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Other Child -> onChange');
  // }
  //
  // ngDoCheck(): void {
  //   console.log('Other Child -> doCheck');
  // }

}
