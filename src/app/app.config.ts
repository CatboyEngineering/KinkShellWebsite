import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaLoaderService, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment.dev';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
