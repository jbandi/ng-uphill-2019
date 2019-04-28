import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'aw-form2',
  templateUrl: './template-driven-form.component.html',
  // styleUrls:['template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements AfterViewInit {
  @ViewChild('formRef') form;

  username = 'Jonas';

  ngAfterViewInit(): void {
    this.form.valueChanges
      .subscribe(v => console.log(v));
  }

  onSubmit(value) {
    console.log(value);
  }

}


// DEMO: Show the form controls in Augury:
// -> form.controls.login.controls
