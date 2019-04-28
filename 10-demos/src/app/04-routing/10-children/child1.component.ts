import {Component, OnInit} from '@angular/core';

@Component({
  template: `
    <div>Child 1 says Hello</div>
  `,
  styles: ['div { background-color: yellow}']
})

export class Child1Component implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
