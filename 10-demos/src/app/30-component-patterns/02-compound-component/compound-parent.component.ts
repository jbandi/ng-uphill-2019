import {Component} from '@angular/core';

@Component({
  template: `
    <h3>The toggle below is a compound component:</h3>

<aw-comp-toggle>
  <aw-comp-toggle-on>
    <div>On</div>
  </aw-comp-toggle-on>
  <aw-comp-toggle-off>
    <div>Off</div>
  </aw-comp-toggle-off>
  <aw-comp-checkbox></aw-comp-checkbox>
</aw-comp-toggle>
  `
})
export class CompoundParentComponent {}


// DEMO:
// - Extend template with more content
// - Move compound content and add more elements
// - Bind [on] prop on toggle, handle (toggle)
