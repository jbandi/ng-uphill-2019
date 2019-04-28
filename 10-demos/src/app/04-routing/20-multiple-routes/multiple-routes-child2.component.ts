import {Component, OnInit} from '@angular/core';

@Component({
  template: `
    <div>Greetings from Child 2</div>
  `,
  styles: ['div { background-color: lime}']
})

export class MultipleRoutesChild2Component implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
