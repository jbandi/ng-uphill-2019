import {Component, OnInit} from '@angular/core';
import { CamelCasePipe } from './camel-case.pipe';

@Component({
  template: `
      {{message | camelCase:true}}
    `,
})
export class CustomPipeComponent  {
  message = 'Hello from angular!';
}


// DEMO: Dependency injection of pipe
// Add somewhere in the component hierarchy: providers: [CamelCasePipe]
//
// Add in component:
//   transformedMessage: string;
//   constructor(private camelCasePipe: CamelCasePipe) {}
//
//   ngOnInit(): void {
//     this.transformedMessage = this.camelCasePipe.transform(this.message);
//   }
