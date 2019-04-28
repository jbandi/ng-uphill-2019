import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'aw-custom-container',
  template: `
    <h3>A custom component rendering a template passed as property:</h3>
    
    <ng-container *ngTemplateOutlet="innerTemplate; context:templateContext"></ng-container>
    
    Below the container ...
  `
})
export class CustomContainerComponent {

  @Input() innerTemplate: TemplateRef<any>;
  @Input() templateContext: object;

}
