import {Component, OnInit} from '@angular/core';

@Component({
  template: `
    <aw-inheritance-base></aw-inheritance-base>
    <aw-inheritance-derived [message]="parentMessage"></aw-inheritance-derived>
  `
})

export class InheritanceContainerComponent {

  parentMessage = 'Hi from the parent!';
}
