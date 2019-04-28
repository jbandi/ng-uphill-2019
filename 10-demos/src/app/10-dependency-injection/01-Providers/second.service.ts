import {Injectable, Inject} from '@angular/core';
import {FirstService} from './first.service';

@Injectable() // decorator is needed for injection of dependencies. Alternative @Inject(FirstService) in constructor
export class SecondService {

    private message = 'Hello from second Service!';

    constructor(private _firstService: FirstService) {}

    getMessage = () => this.message;

    getProxiedMessage = () => 'Proxied: ' + this._firstService.getMessage();
}

