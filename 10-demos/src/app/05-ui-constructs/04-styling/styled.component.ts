import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'aw-styling',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <button>Styled</button>
    <!--<aw-unstyled></aw-unstyled>-->
  `,
  styles: [`
    button {
      color: red;
      background-color: yellow;
    }
  `],
})
export class StyledComponent {}




// DEMO:
// - Change the encapsulation type and inpect the effects
// - Include the unstyled component as a child of the styled component
