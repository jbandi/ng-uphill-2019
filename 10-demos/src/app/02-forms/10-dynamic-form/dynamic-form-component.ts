import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'dynamic-form.component.html',
  styleUrls: ['dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {
  // tslint:disable-next-line
  formDescription = staticFormDescription; // could be loaded from DB //tslint
  form: FormGroup = new FormGroup({});
  formTemplateFields = [];

  ngOnInit() {
    for (const [fieldName, fieldDescription] of Object.entries(this.formDescription)) {
      const formControl = new FormControl(
          fieldDescription.value,
          mapValidator(fieldDescription.validators)
        );
      this.form.addControl(fieldName, formControl);

      this.formTemplateFields.push({
        key: fieldName,
        label: fieldDescription.label,
        type: fieldDescription.type,
        options: fieldDescription.options
      });
    }
  }

}


const staticFormDescription: {[key: string]: IFieldDescription} = {
  firstname: {
    label: 'Firstname',
    value: 'Tyler',
    type: 'text',
    validators: {
      required: true
    }
  },
  age: {
    label: 'Age',
    value: 40,
    type: 'number',
    validators: {
      min: 18
    }
  },
  gender: {
    label: 'Gender',
    value: 'F',
    type: 'radio',
    options: [{label: 'Male', value: 'M'}, {label: 'Female', value: 'F'}],
  },
  city: {
    label: 'City',
    value: '',
    type: 'select',
    options: [
      {label: '(choose one)', value: ''},
      {label: 'New York', value: 'NY'},
      {label: 'Los Angeles', value: 'LA'},
      {label: 'Salt Lake City', value: 'SLC'}
    ],
  }
};


function mapValidator(validators) {
  if (validators) {
    return Object.keys(validators).map(validationType => {
      if (validationType === 'required') {
        return Validators.required;
      } else if (validationType === 'min') {
        return Validators.min(validators[validationType]);
      }
    });
  } else {
    return [];
  }
}

interface IFieldDescription {
  label: string;
  value: string | number ;
  type: 'text' | 'number' | 'radio' |'select';
  options?: {label: string; value: string}[];
  validators?: {required?: boolean, min?: number};
}
