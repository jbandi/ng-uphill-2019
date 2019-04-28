import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BackendAccessComponent} from './01-backend-access/backend-access.component';
import {BackendCrudComponent} from './02-backend-crud/backend-crud.component';
import {BackendSearchComponent} from './03-backend-search/backend-search.component';
import {BackendAccessRoutingModule} from './backend-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, BackendAccessRoutingModule],
  declarations: [BackendAccessComponent, BackendCrudComponent, BackendSearchComponent]
  // no need to export in a a lazy-loaded module
})
export class BackendModule {}
