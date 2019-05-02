import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoScreenComponent} from './todos/components/todo-screen/todo-screen.component';
import {DoneScreenComponent} from './todos/components/done-screen/done-screen.component';

const routes: Routes = [
  { path: '', component: TodoScreenComponent },
  { path: 'done', component: DoneScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
