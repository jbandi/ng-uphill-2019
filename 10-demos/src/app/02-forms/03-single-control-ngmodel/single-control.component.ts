import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgModel} from '@angular/forms';

@Component({
  selector: 'aw-form',
  template: `
    <h3>NgModel - Single Control</h3>
    <input type="text"
           required
           minlength="3"
           [(ngModel)]="username"
           #usernameRef="ngModel">
    <div *ngIf="usernameRef.errors?.required">This field is required</div>
    <hr>
    <h3>Debug:</h3>
    Value: {{usernameRef.value}}
    <br>   
    Valid: {{usernameRef.valid}}
    <br>
    Errors: {{usernameRef.errors | json}}
  `
})
export class SingleControlComponent {

  username = 'Jonas';

}


// DEMO: inject the ngModel into the component:
//
//      @ViewChild('usernameRef') userNameModel: NgModel
//
//        ngAfterViewInit(): void {
//           this.userNameModel.control.valueChanges
//             .subscribe(
//               (val) => console.log(val)
//             );
//         }
