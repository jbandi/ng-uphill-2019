import {Component} from '@angular/core';

@Component({
  template: `
    <div class="container">
      <h1>On push strategy with an Value</h1>
      <label for="onpush-input">Input:</label><br/>
      <input type="text" [(ngModel)]="valueMessage" name="default-input" class="onpush-input"/>
      <aw-on-push-child-value [message]="valueMessage"></aw-on-push-child-value>
    </div>
    <div class="container">
      <h1>On push strategy with an object</h1>
      <label for="onpush-input">Input:</label><br/>
      <input type="text" [(ngModel)]="objectMessage.value" name="default-input" class="onpush-input"/>
      <aw-on-push-child-object [message]="objectMessage"></aw-on-push-child-object>
    </div>
  `
})

export class OnPushParentComponent {
  public valueMessage = 'Hello world';
  public objectMessage = {value: 'Hello world'};
}


// DEMO:
// ChangeDetectionStrategy.OnPush in OnPushChildObjectComponent is not working because the object is changed by the parent
//    - Fix 1: using ChangeDetectionStrategy.Default

//    - Fix 2: switching from ngModel to property & event binding and creating a new object on each change:
//          <input type="text" [value]="objectMessage.value"
//                  (keyup)="onObjectMessageChange($event.target.value)" name="default-input" class="onpush-input"/>
//
//          onObjectMessageChange(value) {
//             this.objectMessage = {value};
//           }
//
//    - Fix 3: Introduce an observable and pass it to the child
//
//          public objectMessage$ = new BehaviorSubject({value: 'Hello world'});
//
//          or:
//          public objectMessageSubject$ = new BehaviorSubject({value: 'Hello world'});
//          public readonly objectMessage$ = this.objectMessageSubject$.asObservable();
//
//          <aw-on-push-child-object [message]="objectMessage$ | async"></aw-on-push-child-object>
//
//          or: take the stream into the child component:
//              <h3>{{(message | async)?.value}}</h3>
