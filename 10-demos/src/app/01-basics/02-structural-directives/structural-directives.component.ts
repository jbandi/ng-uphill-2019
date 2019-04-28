import {Component} from '@angular/core';
import {Emotion, ICharacter} from './character';

@Component({
  selector: 'aw-structural-directives>',
  templateUrl: './structural-directives.component.html'
  // preserveWhitespaces: true
})
export class StructuralDirectivesComponent {

  showDistrict = true;
  Emotion = Emotion; // needed to get a reference to the Enum values in the template

  characters: ICharacter[] = [
    {
      firstName: 'Katniss',
      lastName: 'Everdeen',
      district: 12,
      emotion: Emotion.InLove
    },
    {
      firstName: 'Peeta',
      lastName: 'Mellark',
      district: 12,
      emotion: Emotion.InLove
    },
    {
      firstName: 'Johanna',
      lastName: 'Mason',
      district: 7,
      emotion: Emotion.Angry
    },
    {
      firstName: 'Finnick',
      lastName: 'Odair',
      district: 4,
      emotion: Emotion.Sad
    }
  ];


  // DEMONSTRATE TRACK-BY
  // Check the browser console for how many times the `aw-test-component` is instantiated
//   reload() {
//     this.characters = this.getCharacters();
//   }
//
//   private getCharacters() {
//     return [
//       {
//         firstName: 'Katniss',
//         lastName: 'Everdeen',
//         district: 12,
//         emotion: Emotion.InLove
//       },
//       {
//         firstName: 'Peeta',
//         lastName: 'Mellark',
//         district: 12,
//         emotion: Emotion.InLove
//       },
//       {
//         firstName: 'Johanna',
//         lastName: 'Mason',
//         district: 7,
//         emotion: Emotion.Angry
//       },
//       {
//         firstName: new Date().toTimeString(),
//         lastName: 'Odair',
//         district: 4,
//         emotion: Emotion.Sad
//       }
//     ];
//   }
//
//   trackByFirstName(index: number, character: ICharacter) {
//     return character.firstName;
//   }
}


@Component({
  selector: 'aw-test-component',
  template: '<div></div>'
})
export class TestComponent {
  constructor() {
    console.log('test component created!');
  }
}
