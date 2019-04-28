import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'aw-clock',
  template: '<div>Time: {{time | date:format}}</div>',
  styles: ['']
})
export class ClockComponent implements OnInit {

    time: Date;
    format = 'HH:mm';

    ngOnInit() {
        this.time = new Date();

        setInterval(() => this.time = new Date(), 1000);
    }

}
