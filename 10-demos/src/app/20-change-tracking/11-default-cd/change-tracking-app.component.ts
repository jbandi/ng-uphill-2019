import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <label>Name: </label>
    <input [(ngModel)]="name"/>
    <h3>{{message}}</h3>
    
    <button (click)="noop()">Parent Click</button>

    <!--<span>{{counter}}</span>-->

    <aw-change-first-child></aw-change-first-child>

    <aw-change-other-child></aw-change-other-child>
    <!--<aw-change-other-child *ngFor="let i of list"></aw-change-other-child>-->
    <!--<aw-change-other-child *ngFor="let i of list" [value]="i"></aw-change-other-child>-->
  `,
  styles: [`:host {display: block; background-color: lightyellow; padding: 15px}`]
})
export class ChangeTrackingAppComponent {

  name = 'World';
  private count = 0;

  // DEMO: Switch off change detection of parent component
  // constructor(private changeDetectorRef: ChangeDetectorRef) {}
  // ngAfterViewInit(): void {
  //   this.changeDetectorRef.detach();
  // }

  // DEMO: Performance of change detection with many child components
  // list: any[] = Array.from(Array(1000).keys());

  get message() {
    this.count++;
    console.log('Message Getter: ' + this.count);
    return 'Hello ' + this.name;
  }

  get counter() {
    console.log('Counter Getter');
    return this.count;
  }

  noop() {}

  // triggerChange() {
  //   // this.list.push('Test');
  //   // this.list[1] = new Date().toISOString();
  //
  //   if (this.list[1].time) {
  //     this.list[1].time = new Date().toISOString();
  //   } else {
  //     this.list[1] = {time: new Date().toISOString()};
  //   }
  // }
}
// DEMO:
// - the getters are called multiple times
// - each interaction results in two getter calls
//    - blur input
//    - click button
//    - click button in child component
//    - timer in child component
//    - http access in child component
// - getters are even called in other child components
// - two getter calls just because of debug-mode -> enable prod-mode -> result: one getter call
//    - bind counter in template -> debug mode throws an error -> rendering should not have side effects!
//
// *** Slow tracking:
// Add a list property to the parent: list = new Array(1000);
// Iterate in the template: <aw-change-other-child *ngFor="let i of list"></aw-change-other-child>
// Enable logging in getter of child or call the delay function...
// Start typing something in the parent input ... -> slow
//
// *** Enable debugging tools in main.ts
// Run on console: ng.profiler.timeChangeDetection()
// Run on console: ng.profiler.timeChangeDetection({record: true}) -> Open JavaScript Profiler in Chrome Debug Tools
//
// *** Fixing
// - In other child:
//    - ChangeDetectionStrategy.OnPush
//
// - In parent:
//    - Add new element to list
//    - Change existing element in list on button click: this.list[2] = new Date().toISOString();
//    - Change existing element in list on button click: this.list[1] = {time: new Date().toISOString()};
//    - Problem with OnPush: Changing an object instead of passing a new object:
//           if (this.list[1].time) {
//             this.list[1].time = new Date().toISOString();
//           } else {
//             this.list[1] = {time: new Date().toISOString()};
//           }

