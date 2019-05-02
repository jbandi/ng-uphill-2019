import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'first'},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // // hash-routing can be configured via config
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  // // alternatively hash-routing can be configured via dependency injection
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppRoutingModule { }
