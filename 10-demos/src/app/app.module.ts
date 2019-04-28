import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, APP_INITIALIZER, ErrorHandler} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatListModule, MatSidenavModule} from '@angular/material';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {loadInitialData} from './init';
import {GlobalErrorHandler} from './global-error-handler.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {DatabindingComponent} from './01-basics/01-databinding/databinding.component';
import {
StructuralDirectivesComponent,
TestComponent
} from './01-basics/02-structural-directives/structural-directives.component';
import {ChildListComponent} from './01-basics/03-nested-components/child-list.component';
import {ChildFormComponent} from './01-basics/03-nested-components/child-form.component';
import {ParentComponent} from './01-basics/03-nested-components/parent.component';
import {ServiceConsumerComponent} from './01-basics/05-service/service-consumer.component';
import {LifecycleComponent} from './01-basics/04-lifecycle/lifecycle.component';
import {LifecycleParentComponent} from './01-basics/04-lifecycle/lifecycle-parent.component';
import {FormModule} from './02-forms/forms.module';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DatabindingComponent,
    StructuralDirectivesComponent, TestComponent,
    ParentComponent, ChildFormComponent, ChildListComponent, ServiceConsumerComponent,
    LifecycleParentComponent, LifecycleComponent,
    ServiceConsumerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Initialize ngx-translate, the loader could also be configured in the feature modules ...
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // Angular Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,

    // Feature modules (eager loaded)
    FormModule,

    // initial routing setup
    AppRoutingModule,
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {provide: APP_INITIALIZER, multi: true, useFactory: loadInitialData, deps: [HttpClient]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
