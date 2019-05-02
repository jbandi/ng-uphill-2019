import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoScreenComponent} from './todos/components/to-do-screen.component';

const routes: Routes = [
  { path: '', component: ToDoScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
