import { Component, OnInit } from '@angular/core';
import { FirstService } from './first.service';

@Component({
    selector: 'aw-backend-access',
    templateUrl: 'backend-access.component.html',
})
export class BackendAccessComponent implements OnInit {

    commits;
    errorMessage;

    constructor(private firstService: FirstService) { }

    ngOnInit(): any {
        this.firstService
            .getData() // use .requestData() instead to get access to the full response object
            .subscribe(
            commits => this.commits = commits,
            error => this.errorMessage = error
            );
    }
}

// TODO:
// Use async pipe: Skip the subscribe and expose the observable as property
