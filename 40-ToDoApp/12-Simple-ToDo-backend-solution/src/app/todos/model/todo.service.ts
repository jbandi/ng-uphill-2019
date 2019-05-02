import {Injectable} from '@angular/core';
import {ToDo} from './todo.model';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators'; // pipeable operators are new since RxJS 5.5

const backendUrl = 'http://localhost:3456/todos';
// const backendUrl = 'http://localhost:4212/api/todos'; // check the port and start the CLI with --proxyConfig=proxy.conf.json

// Describe the data received from the backend.
// Note: These are interfaces, since the HttpClient returns plain JavaScript objects, not class instances!
// Note: Ideally these interfaces are generated based on the definition of the api
export interface ToDoData { id: string; title: string;  completed: boolean; } // Note: This has the same structure as the ToDo model class
interface ToDoGetResponse { data: ToDoData[]; }
interface ToDoPostResponse { data: ToDoData; }

@Injectable({providedIn: 'root'})
export class ToDoService {

  constructor(private http: HttpClient) {
  }

  getTodos(completed?: boolean): Observable<ToDo[]> {
    const requestUrl = backendUrl + (completed !== undefined ? `?completed=${completed}` : '');
    return this.http.get<ToDoGetResponse>(requestUrl)
      .pipe(
        map(response => response.data),
        // Map the plain JavaScript object to instances of the model class.
        // This is optional, the application could work with the ToDoData interface.
        map(todosDataArray => todosDataArray.map((todoData) => {
            return ToDo.createFromJson(todoData);
          })),
        catchError(this.handleError)
      );
  }

  saveTodo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDoPostResponse>(backendUrl, todo)
      .pipe(
        map(response => response.data),
        // Map the plain JavaScript object to instances of the model class.
        // This is optional, the application could work with the ToDoData interface.
        map(todoData => {
          return ToDo.createFromJson(todoData);
        }),
        catchError(this.handleError)
      );
  }

  updateTodo(todo: ToDo): Observable<any> {
    return this.http.put(`${backendUrl}/${todo.id}`, todo)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTodo(todo: ToDo): Observable<any> {
    return this.http.delete(`${backendUrl}/${todo.id}`);
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return throwError(errMsg);
  }

}

