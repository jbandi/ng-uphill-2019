import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CounterService} from './counter.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <h1>Change Tracking with Stateful Service</h1>

    <button (click)="service.increment()">Increase</button>
    <p>
      Count from service: {{service.count}}
    </p>
    <p>The count is {{level}}.</p>
  `
})
export class ChangeTrackingCounterComponent {

  constructor(public service: CounterService) {}

  // Optional: wrap service behind getter and method call

  get level() {
    if (this.service.count > 10) {
      return 'high';
    } else {
      return 'low';
    }
  }
}


// DEMO: Default change detection works well with values that are bound in the template
//    - UI does not update when switching to OnPush
//
// DEMO: Updating the ui with a message that changes based on the service state
//    - working implementation: getter that is bound in the template
//    - not working: component gets triggered when service state changes and then updates the component state
