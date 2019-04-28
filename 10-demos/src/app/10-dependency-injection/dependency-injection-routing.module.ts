import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DependencyInjectionComponent} from './01-Providers/dependency-injection.component';

const routes: Routes = [

  {path: 'providers', component: DependencyInjectionComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DependencyInjectionRoutingModule { }
