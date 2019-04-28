import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChangeTrackingRoutingModule} from './change-tracking-routing.module';
import { RedirectComponent } from './01-zonejs/redirect.component';
import { AsyncAwaitComponent } from './02-async-await/async-await.component';
import {ChangeTrackingAppComponent} from './11-default-cd/change-tracking-app.component';
import {ChangeTrackingFirstChildComponent} from './11-default-cd/first-child.component';
import {ChangeTrackingOtherChildComponent} from './11-default-cd/other-child.component';
import {OnPushParentComponent} from './12-on-push/on-push-parent.component';
import {OnPushChildValueComponent} from './12-on-push/on-push-child-value.component';
import {OnPushChildObjectComponent} from './12-on-push/on-push-child-object.component';
import {ChangeTrackingCounterComponent} from './13-cd-service/change-tracking-counter.component';
import {CounterObserverComponent} from './14-cd-service-observable/change-tracking-counter.component';
import { ExpressionChangedComponent } from './21-expression-changed-after-checked/expression-changed.component';
import { ExpressionChangedChildComponent } from './21-expression-changed-after-checked/expression-changed-child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChangeTrackingRoutingModule,
  ],
  declarations: [
    RedirectComponent,
    AsyncAwaitComponent,
    ChangeTrackingAppComponent, ChangeTrackingFirstChildComponent, ChangeTrackingOtherChildComponent,
    OnPushParentComponent, OnPushChildValueComponent, OnPushChildObjectComponent,
    ChangeTrackingCounterComponent,
    CounterObserverComponent,
    ExpressionChangedComponent,
    ExpressionChangedChildComponent,
  ]
})
export class ChangeTrackingModule {}
