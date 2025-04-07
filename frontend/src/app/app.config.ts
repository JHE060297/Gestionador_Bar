import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors  } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { authInterceptor, errorInterceptor } from './core/interceptors/interceptors';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors ([authInterceptor, errorInterceptor])),
    provideAnimations(),
  ]
};