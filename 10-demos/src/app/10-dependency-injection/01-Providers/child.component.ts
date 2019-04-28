import {Component, OnInit} from '@angular/core';
import {FirstService} from './first.service';

@Component({
    selector: 'aw-di-child',
    template: `
    <h4>Child Component</h4>
    <p>Message from first Service: {{firstMessage}}</p>
`,
    providers: [FirstService] // The component gets its own instance of FirstService
})
export class DiChildComponent implements OnInit {
    firstMessage;

    constructor(private _firstService: FirstService) {
    }

    ngOnInit() {
        this.firstMessage = this._firstService.getMessage();
    }


}

