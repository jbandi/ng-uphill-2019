import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  template: `
    <h3>A parent component</h3>

    <aw-comp-child></aw-comp-child>
    
    <aw-comp-other></aw-comp-other>
  `
})

export class InjectionParentComponent implements OnInit, OnDestroy {

  private _notifications = new BehaviorSubject('Initial message!');
  private intervalSubscriber;

  notifications = this._notifications.asObservable();


  constructor() {
  }

  ngOnInit() {
    this.intervalSubscriber = interval(1000)
      .pipe(
        map(v => 'The time is: ' + new Date().toISOString())
      )
      .subscribe(v => this._notifications.next(v));
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}


// DEMO:
// Nest another <aw-comp-child></aw-comp-child> inside the <aw-comp-other></aw-comp-other>
// -> parent injection traverses up the whole component hierarchy
//
// Note: @ContentChild/@ContentChildren only selects direct children!
