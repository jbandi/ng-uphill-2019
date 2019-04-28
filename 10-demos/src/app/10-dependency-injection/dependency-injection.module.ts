import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DependencyInjectionRoutingModule} from './dependency-injection-routing.module';
import {DiChildComponent} from './01-Providers/child.component';
import {DependencyInjectionComponent} from './01-Providers/dependency-injection.component';

@NgModule({
  imports: [
    CommonModule,
    DependencyInjectionRoutingModule,
  ],
  declarations: [
    DependencyInjectionComponent, DiChildComponent
  ]
})
export class DependencyInjectionModule {}
