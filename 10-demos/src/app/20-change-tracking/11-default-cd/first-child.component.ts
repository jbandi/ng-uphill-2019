import {AfterViewInit, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'aw-change-first-child',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div id="change-detection-demo">
      <h3>First Child</h3>
      <div>{{message | json}}</div>

      <button (click)="noop()">Do Nothing!</button>
      <!--<button (click)="triggerChange()">Trigger Change!</button>-->

      <!--<button id="pure-dom-button">No Angular!</button>-->
    </div>
  `,
  styles: [`:host {display: block; background-color: #f2dede; padding: 5px}`]
})
export class ChangeTrackingFirstChildComponent implements OnInit, AfterViewInit {

  constructor(private changeDetectionRef: ChangeDetectorRef, private appRef: ApplicationRef, private zone: NgZone) {
  }

  private _message = 'Hello World!';

  // private _message = {time: 'Hello World!'};

  get message() {
    // console.log('First Child -> Message Getter');
    return this._message;
  }

  ngOnInit(): void {

    // DEMO: Triggers change tracking in parent (even with OnPush)
    // setInterval(() => this.noop(), 2000);
    // fetch('https://api.github.com/repos/angular/angular/commits')
    //   .then(() => console.log('Fetched from backend'));

    // DEMO: Zone patches browser APIs ... the following works with default change tracking
    // document.getElementById('pure-dom-button').addEventListener('click', () => {
    //   // NOTE: CD is even triggered when nothing is done here ...
    //   // this._message = new Date().toISOString();
    //   // this.changeDetectionRef.markForCheck(); // make it work with OnPush
    // });
  }

  ngAfterViewInit(): void {
    // this.changeDetectionRef.detach();
  }

  noop() {
  }

  triggerChange() {
    // DEMO: UI is updated even with OnPush, because it is called via Angular event binding
    this._message = new Date().toISOString();
    // this._message.time = new Date().toISOString();

    // DEMO: UI does not update with OnPush ... even though CD is triggered it is not propagated into this component
    // setTimeout(() => {
    //   this._message = new Date().toISOString();
    //   // this.changeDetectionRef.markForCheck(); // Fix -> now it updates even with OnPush
    // }, 1000);

    // DEMO: explicitly trigger change detection
    // this.appRef.tick(); // trigger change detection
    // console.log('Triggered change detection');
    // this.changeDetectionRef.reattach();
    // this.changeDetectionRef.markForCheck(); // Perform change detection for this component in the next change detection run
    // this.changeDetectionRef.detectChanges();  // Trigger change detection for this component


    // DEMO: Does not trigger CD at all after timeout
    // this.zone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     this._message = new Date().toISOString();
    //   }, 1000);
    // });

  }

  // DEMO: trigger change outside of Angular
  // Call the following code from the debug console like this:
  //      ng.probe(document.getElementById('change-detection-demo')).componentInstance.triggerFromOutside()
  triggerFromOutside() {
    this._message = new Date().toISOString();

    // this.changeDetectionRef.markForCheck(); // fix for OnPush when called before tick()
    // this.appRef.tick(); // fix for default change detection

    // another fix for default change detection
    // this.zone.run(() => {
    //   this._message = new Date().toISOString();
    //   // this.changeDetectionRef.markForCheck(); // fix for OnPush
    // });
  }
}
