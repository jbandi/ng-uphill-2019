import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatedComponent} from './01-simple/translated.component';
import {InternationalizationRoutingModule} from './internationalization-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    // TranslateModule.forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // }),
    InternationalizationRoutingModule
  ],
  declarations: [TranslatedComponent]
})
export class InternationalizationModule {
}
