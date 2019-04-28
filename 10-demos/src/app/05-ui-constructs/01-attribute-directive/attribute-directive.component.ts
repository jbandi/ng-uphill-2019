import {Component} from '@angular/core';

@Component({
  selector: 'aw-directive',
  template: `

    <h3>The following element is enhanced with an attribute directive</h3>

    <p awHighlight>I am green with envy!</p>

    <!--<p [awHighlight]="'lime'">I am green with envy!</p>-->
  `,
})
export class AttributeDirectiveComponent {}



