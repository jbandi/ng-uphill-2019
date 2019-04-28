import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentPatternsRoutingModule} from './component-patterns-routing.module';
import {InjectionParentComponent} from './01-parent-injection/injection-parent.component';
import {ChildComponent} from './01-parent-injection/child.component';
import {OtherComponent} from './01-parent-injection/other.component';
import {CompoundParentComponent} from './02-compound-component/compound-parent.component';
import {ToggleComponent} from './02-compound-component/toggle.component';
import {ToggleOnComponent} from './02-compound-component/toggle-on.component';
import {ToggleOffComponent} from './02-compound-component/toggle-off.component';
import {ToggleCheckboxComponent} from './02-compound-component/toggle-checkbox.component';
import {TemplateParentComponent} from './03-ng-templates/template-parent.component';
import {CustomContainerComponent} from './04-template-ref/custom-container.component';
import {TemplateRefParentComponent} from './04-template-ref/template-ref-parent.component';
import {DynamicCreationParentComponent} from './05-dynamic-component/dynamic-creation-parent.component';
import {DynamicChildComponent} from './05-dynamic-component/dynamic-child.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentPatternsRoutingModule
  ],
  declarations: [
    InjectionParentComponent, ChildComponent, OtherComponent,
    CompoundParentComponent, ToggleComponent,
          ToggleOnComponent, ToggleOffComponent, ToggleCheckboxComponent,
    TemplateParentComponent,
    TemplateRefParentComponent, CustomContainerComponent,
    DynamicCreationParentComponent, DynamicChildComponent
  ],
  entryComponents: [DynamicChildComponent]
})
export class ComponentPatternsModule {
}
