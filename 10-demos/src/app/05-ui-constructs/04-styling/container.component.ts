import { Component } from '@angular/core';

@Component({
    selector: 'aw-styling-container',
    template: `
        <h2>Styled Component</h2>
        <aw-styling></aw-styling>

        <h2>Unstyled Component</h2>
        <aw-unstyled></aw-unstyled>
  `
})
export class StylingContainerComponent {
}

