import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const BACKEND_URL = 'http://localhost:3456/todos';

interface ToDo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'aw-backend-crud',
  templateUrl: 'backend-crud.component.html'
})
export class BackendCrudComponent {

  todos$: Observable<any>;
  todos: any;
  ratingId: number;
  todoText: string;
  completed = false;

  constructor(private http: HttpClient) {}

  getTodos() {
    this.todos$ = this.http
      .get<ToDo>(BACKEND_URL);


    this.todos$.subscribe(
        v => this.todos = v
      );
  }

  postTodo() {

    const todo = {title: this.todoText, completed: this.completed};

    this.http
      .post(BACKEND_URL, todo)
      .subscribe(
        v => console.log(v)
      );
  }

  putTodo() {

    const rating = {title: this.todoText, completed: this.completed};

    this.http
      .put(`${BACKEND_URL}/${this.ratingId}`, rating)
      .subscribe();
  }

  deleteTodo() {
    this.http
      .delete(`${BACKEND_URL}/${this.ratingId}`)
      .subscribe();
  }

}
