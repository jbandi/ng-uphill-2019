import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) // A service can be provided as singelton in the 'root' module
// @Injectable() // A service that is not `providedIn` must be 'provided' by a NgModule or by a component
export class ProviderService {

  private message = 'Hello from Service!';

  constructor() {
    console.log('Instantiating the service ...');
  }

  getMessage() {
    return this.message;
  }

}
