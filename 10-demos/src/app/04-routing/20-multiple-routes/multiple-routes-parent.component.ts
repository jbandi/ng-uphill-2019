import {Component, OnInit} from '@angular/core';

@Component({
  template: `

    <a routerLink="./child1">Main 1</a>
    &nbsp;
    <a routerLink="./child2">Main 2</a>
    &nbsp;
    <a [routerLink]="[{outlets:{side:['side1']}}]">Side 1</a>
    &nbsp;
    <a [routerLink]="[{outlets:{side:['side2']}}]">Side 2</a>
    &nbsp;
    <a [routerLink]="[{outlets:{primary: 'child1',side:['side1']}}]">Both</a>


<div style="display: flex">
  <div style="flex-grow: 1; background-color: lightyellow">
    <h3>Main Content</h3>
    <router-outlet></router-outlet>
  </div>

  <div style="background-color: mistyrose">
    <h4>Side Content</h4>
    <router-outlet name="side"></router-outlet>
  </div>
</div>
  `
})

export class MultipleRoutesParentComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
