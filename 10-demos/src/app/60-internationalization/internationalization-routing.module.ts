import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslatedComponent} from './01-simple/translated.component';

const routes: Routes = [

  {path: 'translated', component: TranslatedComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InternationalizationRoutingModule { }
