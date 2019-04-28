import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RedirectComponent} from './01-zonejs/redirect.component';
import {AsyncAwaitComponent} from './02-async-await/async-await.component';
import {ChangeTrackingAppComponent} from './11-default-cd/change-tracking-app.component';
import {ChangeTrackingCounterComponent} from './13-cd-service/change-tracking-counter.component';
import {OnPushParentComponent} from './12-on-push/on-push-parent.component';
import {CounterObserverComponent} from './14-cd-service-observable/change-tracking-counter.component';
import {ExpressionChangedComponent} from './21-expression-changed-after-checked/expression-changed.component';

const routes: Routes = [

  {path: 'zonejs', component: RedirectComponent},
  {path: 'async-await', component: AsyncAwaitComponent},
  {path: 'demo', component: ChangeTrackingAppComponent},
  {path: 'on-push', component: OnPushParentComponent},
  {path: 'counter', component: ChangeTrackingCounterComponent},
  {path: 'observable', component: CounterObserverComponent},
  {path: 'expression-changed', component: ExpressionChangedComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChangeTrackingRoutingModule { }
