import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgModel, Validators} from '@angular/forms';

@Component({
  template: `
    <h3>Reactive Forms: a single control</h3>
    <input type="text" [formControl]="theControl"/>

    <div *ngIf="theControl.errors?.required">This field is required</div>
    <hr>
    <h3>Debug:</h3>
    Value: {{theControl.value}}
    <br>    
    Valid: {{theControl.valid}}
    <br>
    Errors: {{theControl.errors | json}}
  `
})
export class SingleControlReactiveComponent {

  // empty no validation
  // theControl = new FormControl();

  // default value, validation
  theControl = new FormControl('Default', [Validators.required, Validators.minLength(3)]);

}


// DEMO: Change validation at runtime

// DEMO: Subscribe to changes
//
//        ngOnInit: void {
//           this.theControl.valueChanges
//             .subscribe(
//               (val) => console.log(val)
//             );
//         }


// DEMO: Add styling:
// styles: ['.ng-invalid { border: 3px solid red;}']
