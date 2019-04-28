import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'awesome-ng';

  ngAfterViewInit(): void {
    // this.title = new Date().toISOString();
  }


}
