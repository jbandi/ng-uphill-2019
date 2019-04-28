import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aw-inheritance-base',
  template: `
    <div style="background-color: lightyellow">
      <h1>I am a base component</h1>
      Message: {{message}}
    </div>
  `
})

export class InheritanceBaseComponent implements OnInit {
  @Input() message = 'Hi from base!';

  ngOnInit(): void {
    console.log('Base init ...');
  }
}
