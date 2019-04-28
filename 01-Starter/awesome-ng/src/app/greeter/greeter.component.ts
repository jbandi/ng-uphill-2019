import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-greeter',
  template: `
    <p>
      greeter works!
    </p>
  `,
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {
  @Input() text;

  constructor(private parent: AppComponent) { }

  ngOnInit() {
    this.parent.title = 'Gugus';
  }

}
