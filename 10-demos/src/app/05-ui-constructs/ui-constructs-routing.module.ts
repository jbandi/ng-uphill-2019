import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AttributeDirectiveComponent} from './01-attribute-directive/attribute-directive.component';
import {PipesComponent} from './02-pipes/pipes.component';
import {CustomPipeComponent} from './03-custom-pipe/custom-pipe.component';
import {StylingContainerComponent} from './04-styling/container.component';
import {ContentMainComponent} from './06-content-projection/main.component';
import {BindingComponent} from './21-two-way-binding/binding.component';
import {InheritanceContainerComponent} from './30-component-inheritance/inheritance-container.component';


const advancedRoutes: Routes = [

  {path: 'attribute-directive', component: AttributeDirectiveComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'custom-pipes', component: CustomPipeComponent},
  {path: 'styling', component: StylingContainerComponent},

  {path: 'content-projection', component: ContentMainComponent},
  {path: 'two-way-binding', component: BindingComponent},
  {path: 'inheritance', component: InheritanceContainerComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(advancedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UiConstructsRoutingModule { }
