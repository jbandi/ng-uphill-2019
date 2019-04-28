import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>
      Redirecting to a page that does not automatically load Angular ...
    </p>
  `,
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => document.location.href = 'assets/no-load.html', 2000);
  }

}
