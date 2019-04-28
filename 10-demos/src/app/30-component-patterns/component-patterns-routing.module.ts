import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InjectionParentComponent} from './01-parent-injection/injection-parent.component';
import {CompoundParentComponent} from './02-compound-component/compound-parent.component';
import {TemplateParentComponent} from './03-ng-templates/template-parent.component';
import {TemplateRefParentComponent} from './04-template-ref/template-ref-parent.component';
import {DynamicCreationParentComponent} from './05-dynamic-component/dynamic-creation-parent.component';

const routes: Routes = [

  {path: 'parent-injection', component: InjectionParentComponent},
  {path: 'compound-component', component: CompoundParentComponent},
  {path: 'ng-templates', component: TemplateParentComponent},
  {path: 'template-property', component: TemplateRefParentComponent},
  {path: 'dynamic-component', component: DynamicCreationParentComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentPatternsRoutingModule { }
