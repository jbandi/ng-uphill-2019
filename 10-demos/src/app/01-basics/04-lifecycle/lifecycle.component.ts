import {
  OnChanges, SimpleChange, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy
} from '@angular/core';
import {Component, Input} from '@angular/core';

let nextId = 1;

@Component({
  selector: 'aw-lifecycle',
  template: '<p>Current date {{date}}</p>',
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() date: Date;

  private _verb = 'initialized';

  constructor() {

    const is = this.date ? 'is' : 'is not';
    this._logIt(`date ${is} known at construction`);
  }

  protected _logIt(msg: string) {

    const message = `#${nextId++} ${msg}`;
    console.log(message);
  }

  ngOnInit() {
    this._logIt(`OnInit`);
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes['name'].currentValue;
        changesMsgs.push(`name ${this._verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this._verb);
      }
    }
    this._logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this._verb = 'changed'; // next time it will be a change
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    this._logIt(`DoCheck`);
  }

  ngAfterContentInit() {
    this._logIt(`AfterContentInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    this._logIt(`AfterContentChecked`);
  }

  ngAfterViewInit() {
    this._logIt(`AfterViewInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    this._logIt(`AfterViewChecked`);
  }

  ngOnDestroy() {
    this._logIt(`OnDestroy`);
  }
}
