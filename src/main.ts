import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Sentry from '@sentry/angular';


if (environment.production) {
  enableProdMode();
}
// solo debería ser en producción
Sentry.init({
  dsn: environment.sentry_dns,
});


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
