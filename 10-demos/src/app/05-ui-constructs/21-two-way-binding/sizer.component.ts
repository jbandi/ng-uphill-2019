import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aw-sizer',
  template: `
  <div>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger">+</button>
    <label>FontSize: {{size}}px</label>
  </div>`
})
export class SizerComponent {

  // if property and event are named according the convention (xxxChange)
  // then the banana-in-a-box syntax can be used two-way binding.
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(55, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
