import {Component} from '@angular/core';

@Component({
  selector: 'aw-databinding',
  templateUrl: './databinding.component.html',
})
export class DatabindingComponent {

  name = 'Angular';
  message1 = 'You are';
  message2 = 'a great framework!';

  color = 'red';

  onChange(event: UIEvent) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onChange2(value: string) {
    this.name = value;
  }
}
