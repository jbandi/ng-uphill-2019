import {Component, OnInit} from '@angular/core';

@Component({
  template: `

    <a routerLink="./child1">Child1</a>
    <a routerLink="./child2">Child2</a>

    <h3>Content of the ParentComponent is provided in a router outlet:</h3>
    <router-outlet></router-outlet>
  `
})

export class ParentComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
