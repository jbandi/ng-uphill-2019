import {Injectable} from '@angular/core';

// @Injectable() // decorator is only needed if the service has dependencies himself
export class FirstService {

    message = 'Hello from first Service!';

    getMessage = () => this.message;
}

