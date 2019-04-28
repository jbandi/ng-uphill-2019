import {Component, OnInit} from '@angular/core';

@Component({
  styles: [':host {display: block; border: 1px solid silver; padding: 20px}'],
  template: `

    <ng-template #greeting let-name="name">
      <p>My name is {{name}}</p>
    </ng-template>
    
    <ng-container *ngTemplateOutlet="greeting; context:greetingContext"></ng-container>
  `
})

export class TemplateParentComponent {
  greetingContext = {name: 'Jonas'};
}


// // DEMO Start:
// <ng-template #greeting>
// <p>Loading ...</p>
// </ng-template>
// <ng-container [ngTemplateOutlet]="greeting"></ng-container>


// Alternative:
// <ng-container *ngTemplateOutlet="greeting"></ng-container>



// // DEMO with Context:
// <ng-template #greeting let-name2="name">
//   <h1>My name is {{name}}</h1>
// </ng-template>
//
// <ng-container [ngTemplateOutlet]="greeting" [ngTemplateOutletContext]="greetingContext"></ng-container>

// Alternative:
// <ng-container *ngTemplateOutlet="greeting; context:greetingContext"></ng-container>
