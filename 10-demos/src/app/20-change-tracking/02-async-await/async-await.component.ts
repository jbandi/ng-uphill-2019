import { Component, OnInit } from '@angular/core';

const BACKEND_URL = 'https://api.github.com/repos/angular/angular/commits';

@Component({
  template: `
    <h1> Count 1: {{ count1 }}</h1>
    <p>(using Promise)</p>
    <h1> Count 2: {{ count2 }}</h1>
    <p>(using async/await)</p>
    <pre>{{data | json}}</pre>
  `,
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  count1 = 0;
  count2 = 0;
  data = undefined;

  ngOnInit() {
    this.increase1();
    this.increase2();

    // Alternative usage of async
    // const response = await fetch(BACKEND_URL);
    // this.data = await response.json();
    // console.log('Received data: ', this.data);

  }

  tick() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  increase1() {
    this.tick().then(() => {
      this.count1++;
      this.increase1();
    });
  }

  async increase2() {
    console.log('Count 2: ', this.count2);
    await this.tick();
    this.count2++;
    this.increase2();
  }

}


//// DEMO:
// Workaround: Remove `mat-sidenav` in `app.component.html` -> Angular Material has a bug when compiling to es2015 or later: https://github.com/angular/angular/issues/27267
// Set 'target' to 'es2017' in tsconfig.json
// Remove the call to `this.increase1()` -> async/await does not trigger change detection!
