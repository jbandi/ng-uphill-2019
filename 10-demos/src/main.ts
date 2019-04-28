import {ApplicationRef, CompilerOptions, enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableDebugTools} from '@angular/platform-browser';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {BootstrapOptions} from '@angular/core/src/application_ref';

if (environment.production) {
  enableProdMode();
}


const bootstrapOptions: BootstrapOptions = {};
// const bootstrapOptions: BootstrapOptions = {ngZone: 'noop'}; // Disable Zones for change detection

platformBrowserDynamic().bootstrapModule(AppModule, bootstrapOptions)
  // .then(moduleRef => {
  //   const applicationRef = moduleRef.injector.get(ApplicationRef);
  //   const appComponent = applicationRef.components[0];
  //   enableDebugTools(appComponent);
  // })
  .catch(err => console.log(err));

