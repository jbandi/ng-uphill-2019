import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackendAccessComponent } from './01-backend-access/backend-access.component';
import { BackendCrudComponent } from './02-backend-crud/backend-crud.component';
import { BackendSearchComponent } from './03-backend-search/backend-search.component';


const backendAccessRoutes: Routes = [

    { path: 'backend-access', component: BackendAccessComponent },
    { path: 'backend-crud', component: BackendCrudComponent},
    { path: 'backend-search', component: BackendSearchComponent},

    { path: '**', redirectTo: 'backend-access' }, // default route
];


@NgModule({
  imports: [
    RouterModule.forChild(backendAccessRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BackendAccessRoutingModule { }
