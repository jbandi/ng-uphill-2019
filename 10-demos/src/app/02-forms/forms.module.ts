import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormComponent} from './02-reactive-form/reactive-form.component';
import {TemplateDrivenFormComponent} from './04-template-driven-form/template-driven-form.component';
import {SingleControlComponent} from './03-single-control-ngmodel/single-control.component';
import {SingleControlReactiveComponent} from './01-single-control-reactive/single-control-reactive.component';
import {NgModule} from '@angular/core';
import {FormsRoutingModule} from './forms-routing.module';
import {DynamicFormComponent} from './10-dynamic-form/dynamic-form-component';

@NgModule({
  declarations: [
    SingleControlReactiveComponent,
    ReactiveFormComponent,
    SingleControlComponent,
    TemplateDrivenFormComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ],
  exports: [
    // you only need to export the component if its used in a template
    // SimpleFormComponent, TemplateDrivenFormComponent, ReactiveFormComponent
  ],
  providers: [],
})
export class FormModule {}
