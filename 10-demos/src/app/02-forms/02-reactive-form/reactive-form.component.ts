import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'aw-form',
  template: `
    <h3>Reactive Form</h3>

    <form [formGroup]="theForm"
          (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name"
               formControlName="name">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password"
               formControlName="password">
      </div>
      <button type="submit">Submit</button>
    </form>

    <h3>Debug:</h3>
    Valid: {{theForm.valid}}
    <br>
    Errors:
    Name: {{theForm.controls['name'].errors | json}},
    Password: {{theForm.controls['password'].errors | json}}
    <br>
    Value: {{theForm.value | json}}
  `
})
export class ReactiveFormComponent {
  theForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.theForm = new FormGroup({
      name: new FormControl(),
      password: new FormControl()
    });

    // Add Validation
    // this.theForm = new FormGroup({
    //   name: new FormControl('Tyler', [Validators.required]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(3)])
    // });

    // The FormBuilder is a helper to create FormGroups/FromControls:
    // this.theForm = formBuilder.group({
    //     'name': ['Tyler', Validators.required],
    //     'password': ['', [Validators.required, Validators.minLength(3)]]
    // });
  }

  onSubmit() {
    console.log('submitted: ', this.theForm.value);
  }
}

// DEMO:
// - Use [formControl]="theForm.controls['name']" instead of formControlName="name"
// - Wrap another <fieldset formGroupName="mygroup"> around the controls
