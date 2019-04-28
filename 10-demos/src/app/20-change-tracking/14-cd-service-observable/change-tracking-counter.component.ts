import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ObservableCounterService} from './observable-counter.service';
import {Subscription} from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <h1>Change Tracking with Observable Stateful Service</h1>

    <button (click)="service.increment()">Increase</button>
    <p>
      Count from service: {{service.counter$ | async}}
    </p>
    <p>The count is {{level}}.</p>
  `
})
export class CounterObserverComponent implements OnInit, OnDestroy {

  level = 'low';
  private counterSubscription: Subscription;

  constructor(public service: ObservableCounterService, private appRef: ApplicationRef, private cdr: ChangeDetectorRef) {
  }

  // Optional: wrap service behind getter and method call

  ngOnInit() {
    this.counterSubscription =  this.service.counter$
      .subscribe(
        (count) => this.setLevel(count)
      );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
    this.service.stop();
  }

  private setLevel(count: number) {
    console.log('changed ...');
    if (count > 10) {
      this.level = 'high';
    } else {
      this.level = 'low';
    }
  }

}
