import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RoutedComponent} from './01-route-snapshot/routed.component';
import {OtherComponent} from './01-route-snapshot/other.component';
import {RoutedObservableComponent} from './02-route-observable/routed.component';
import {ParentComponent} from './10-children/parent.component';
import {Child1Component} from './10-children/child1.component';
import {Child2Component} from './10-children/child2.component';
import {MultipleRoutesParentComponent} from './20-multiple-routes/multiple-routes-parent.component';
import {MultipleRoutesChild1Component} from './20-multiple-routes/multiple-routes-child1.component';
import {MultipleRoutesChild2Component} from './20-multiple-routes/multiple-routes-child2.component';


const routingRoutes: Routes = [


  {path: 'route-snapshot/:detailNumber', component: RoutedComponent},
  {path: 'other-snapshot/:detailNumber', component: OtherComponent},
  {path: 'route-observable/:detailNumber', component: RoutedObservableComponent},
  {path: 'children', component: ParentComponent,
    children: [
      {path: '', redirectTo: 'child1', pathMatch: 'full'},
      {path: 'child1', component: Child1Component},
      {path: 'child2', component: Child2Component}
    ]
  },
  {path: 'multiple-routes', component: MultipleRoutesParentComponent,
    children: [
      {path: '', redirectTo: 'child1', pathMatch: 'full'},
      {path: 'child1', component: MultipleRoutesChild1Component},
      {path: 'child2', component: MultipleRoutesChild2Component},
      {path: '', redirectTo: 'side1', pathMatch: 'full', outlet: 'side'},
      {path: 'side1', component: MultipleRoutesChild2Component, outlet: 'side'},
      {path: 'side2', component: MultipleRoutesChild1Component, outlet: 'side'},
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingRoutingModule { }
