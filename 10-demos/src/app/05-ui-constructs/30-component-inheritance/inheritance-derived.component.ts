import {Component, OnInit} from '@angular/core';
import {InheritanceBaseComponent} from './inheritance-base.component';

@Component({
  selector: 'aw-inheritance-derived',
  template: `
    <div style="background-color: mistyrose">
      <h1>I am a derived component</h1>
      Message: {{message}}
    </div>
  `
})
export class InheritanceDerivedComponent
  extends InheritanceBaseComponent
  implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
    console.log('Derived init ...');
  }

}
