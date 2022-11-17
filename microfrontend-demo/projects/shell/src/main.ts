import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/* 
    & create Monorepo
    $ ng new microfrontend-demo --create-application=false
  
    & crate shell and mfe1
    $ ng g application shell
    $ ng g application mfe1

    & add @angular-architects/module-federation
    $ ng add @angular-architects/module-federation --project shell --type host --port 4200
    $ ng add @angular-architects/module-federation --project mfe1 --type remote --port 4201
  
    & create flights module and flight component on mfe1
    $ ng g module flights --project=mfe1

    & in shell create route
    const routes: Routes = [
      {
        path: 'flights',
        loadChildren: () => import('mfe1/Module')
          .then(m => m.FlightsModule)
      },
    ];

    & create 'mfe1/Module' to remove type issue under: projects\shell\src\decl.d.ts
    declare module 'mfe1/Module';
  */
