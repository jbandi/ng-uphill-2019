import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UiConstructsRoutingModule} from './ui-constructs-routing.module';
import {AttributeDirectiveComponent} from './01-attribute-directive/attribute-directive.component';
import {PipesComponent} from './02-pipes/pipes.component';
import {CustomPipeComponent} from './03-custom-pipe/custom-pipe.component';
import {CamelCasePipe} from './03-custom-pipe/camel-case.pipe';
import {HighlightDirective} from './01-attribute-directive/highlight.directive';
import {StylingContainerComponent} from './04-styling/container.component';
import {UnstyledComponent} from './04-styling/unstyled.component';
import {StyledComponent} from './04-styling/styled.component';

import {ClockComponent} from './06-content-projection/clock/clock.component';
import {BlackBoxComponent} from './06-content-projection/black-box/black-box.componen';
import {ContentMainComponent} from './06-content-projection/main.component';
import {BindingComponent} from './21-two-way-binding/binding.component';
import {SizerComponent} from './21-two-way-binding/sizer.component';
import {InheritanceContainerComponent} from './30-component-inheritance/inheritance-container.component';
import {InheritanceBaseComponent} from './30-component-inheritance/inheritance-base.component';
import {InheritanceDerivedComponent} from './30-component-inheritance/inheritance-derived.component';

@NgModule({
  declarations: [
    AttributeDirectiveComponent, HighlightDirective,
    PipesComponent,
    CustomPipeComponent, CamelCasePipe,
    StylingContainerComponent, StyledComponent, UnstyledComponent,
    ContentMainComponent, BlackBoxComponent, ClockComponent,
    BindingComponent, SizerComponent,
    InheritanceContainerComponent, InheritanceBaseComponent, InheritanceDerivedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UiConstructsRoutingModule
  ],
  exports: [
    // you only need to export the component if its used in a template
  ],
  providers: [],
})
export class UiConstructsModule {}
