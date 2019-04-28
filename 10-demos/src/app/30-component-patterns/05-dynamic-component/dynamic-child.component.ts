import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  template: `
    <h3>A dynamically created child component</h3>
    <div>
      {{message}}
    </div>
    <div>
      Current Time: {{time}}
    </div>
  `
})
export class DynamicChildComponent {
  message = 'Hello World!';
  time = new Date().toISOString();
}
