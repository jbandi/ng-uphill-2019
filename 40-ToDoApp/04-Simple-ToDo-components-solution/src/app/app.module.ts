import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoScreenComponent } from './todos/components/todo-screen/todo-screen.component';
import { NewTodoComponent } from './todos/components/new-todo/new-todo.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/components/todo-item/todo-item.component';
import { DoneScreenComponent } from './todos/components/done-screen/done-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoScreenComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    DoneScreenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
