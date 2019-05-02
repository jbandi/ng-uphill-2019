import {ToDoData} from './todo.service';

export class ToDo {
  id: string;
  title: string;
  completed: boolean;

  constructor(title: string = '') {
    this.completed = false;
    this.title = title.trim();
  }

  static createFromJson(jsonData: ToDoData): ToDo {
    const newToDo = new ToDo();
    return Object.assign(newToDo, jsonData);
  }
}
