import {Component} from '@angular/core';

let messageLog: string[] = [];

@Component({
    selector: 'aw-lifecycle-parent',
    templateUrl: './lifecycle-parent.component.html',
})
export class LifecycleParentComponent {

    hasChild = false;
    theDate = new Date();

    toggleChild() {
        if (!this.hasChild) {
            this.theDate = new Date();
            messageLog = []; // clear log on create
        }
        this.hasChild = !this.hasChild;
    }

    update() {
        this.theDate = new Date();
    }

}
