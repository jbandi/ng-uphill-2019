import { Component } from '@angular/core';

@Component({
  selector: 'aw-pipes',
  template: `
    <div>
      {{message | uppercase }}
    </div>
    <div>
      {{time | date:'mediumDate'}}
    </div>
    <div>
      {{count | percent:'2.1-2'}}
    </div>
    <hr>
    <div>
      Person:
      <div *ngFor="let property of person | keyvalue">{{property.key}}: {{property.value}}</div>
    </div>
    <hr>
    <div>
      Letters:
      <div *ngFor="let letter of letters | slice:2:4">{{letter}}</div>
    </div>

    <hr>
    <hr>
    <div>
      See all built in pipes:
      <a href="https://angular.io/api?type=pipe">https://angular.io/api?type=pipe</a>
    </div>
  `
})
export class PipesComponent {
  message = 'Hello from Angular!!!!';
  time: Date = new Date();
  count = 0.45699;
  person = { firstName: 'Tyler', lastName: 'Durden', weight: 68 };
  letters = ['a', 'b', 'c', 'd', 'e'];
}
