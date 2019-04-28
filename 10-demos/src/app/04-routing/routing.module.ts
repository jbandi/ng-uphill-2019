import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RoutingRoutingModule} from './routing-routing.module';
import {RoutedComponent} from './01-route-snapshot/routed.component';
import {OtherComponent} from './01-route-snapshot/other.component';
import {RoutedObservableComponent} from './02-route-observable/routed.component';
import {ParentComponent} from './10-children/parent.component';
import {Child1Component} from './10-children/child1.component';
import {Child2Component} from './10-children/child2.component';
import {MultipleRoutesParentComponent} from './20-multiple-routes/multiple-routes-parent.component';
import {MultipleRoutesChild1Component} from './20-multiple-routes/multiple-routes-child1.component';
import {MultipleRoutesChild2Component} from './20-multiple-routes/multiple-routes-child2.component';

@NgModule({
  declarations: [
    RoutedComponent, OtherComponent,
    RoutedObservableComponent,
    ParentComponent, Child1Component, Child2Component,
    MultipleRoutesParentComponent, MultipleRoutesChild1Component, MultipleRoutesChild2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule {}
