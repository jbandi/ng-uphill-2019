import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {

  private _count = 0;

  constructor() {
    setInterval(() => this.increment(), 1000);
  }

  get count() {
    return this._count;
  }

  increment() {
    this._count++;
    console.log('Service: counter increased: ' + this._count);
  }

}

