export enum Emotion {
  InLove,
  Angry,
  Sad
}

export interface ICharacter {
  firstName: string;
  lastName: string;
  district: number;
  emotion: Emotion;
}
