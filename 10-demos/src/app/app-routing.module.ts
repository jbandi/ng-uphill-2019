import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatabindingComponent} from './01-basics/01-databinding/databinding.component';
import {StructuralDirectivesComponent} from './01-basics/02-structural-directives/structural-directives.component';
import {ParentComponent} from './01-basics/03-nested-components/parent.component';
import {ServiceConsumerComponent} from './01-basics/05-service/service-consumer.component';
import {LifecycleParentComponent} from './01-basics/04-lifecycle/lifecycle-parent.component';
import {BackendModule} from './03-BackendAccess/backend.module';

function getBakcenModule() {
  return BackendModule;
}

const routes: Routes = [
  {path: 'databinding', component: DatabindingComponent},
  {path: 'structural-directives', component: StructuralDirectivesComponent},
  {path: 'nested-components', component: ParentComponent},
  {path: 'lifecycle', component: LifecycleParentComponent},
  {path: 'service', component: ServiceConsumerComponent},

  // Note: The forms module brings its own route configuration
  // It would be nice to have "consistent" API which allows using 'loadChildren' without lazy loading like this:
  // {path:'forms', loadChildren: () => FromsModule}
  // But this does not work. See:
  // https://github.com/angular/angular-cli/issues/4192
  // https://github.com/angular/angular/issues/21170

  {path: 'backend', loadChildren: './03-BackendAccess/backend.module#BackendModule'},
  {path: 'routing', loadChildren: './04-routing/routing.module#RoutingModule'},
  {path: 'ui-constructs', loadChildren: './05-ui-constructs/ui-constructs.module#UiConstructsModule'},
  {path: 'dependency-injection', loadChildren: './10-dependency-injection/dependency-injection.module#DependencyInjectionModule'},
  {path: 'change-tracking', loadChildren: './20-change-tracking/change-tracking.module#ChangeTrackingModule'},
  {path: 'component-patterns', loadChildren: './30-component-patterns/component-patterns.module#ComponentPatternsModule'},
  {path: 'internationalization', loadChildren: './60-internationalization/internationalization.module#InternationalizationModule'},
  {path: '**', redirectTo: 'databinding'}, // default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes /*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


