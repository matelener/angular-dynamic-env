import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {Environment} from './environment/environment';

fetch('environment.json').then(res => res.json()).then(envJson => {
  if (!envJson) {
    throw new Error('Empty environment.json!');
  }
  const environment = {
    ...envJson
  } as Environment;

  if (environment.prod) {
    enableProdMode();
  }

  platformBrowserDynamic([{
    provide: Environment,
    useValue: environment
  }]).bootstrapModule(AppModule)
    .catch(err => console.error(err));
});


