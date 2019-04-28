import {Component, OnInit} from '@angular/core';

@Component({
  template: `
    <div [style.font-size.px]="fontSizePx">Resizable Text</div>
    <aw-sizer [(size)]="fontSizePx"></aw-sizer>

    <!--desugared-->
    <!--<aw-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></aw-sizer>-->
  `
})

export class BindingComponent {
  fontSizePx = 42;
}
