import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MetaReducer, provideStore } from '@ngrx/store';
import { localstorageMetaReducer } from './store/localstorage-meta.reducer';
import { rootReducer } from './store/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthStateEffects } from './store/auth-state/auth-state.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const metaReducers: MetaReducer[] = [localstorageMetaReducer];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(rootReducer, { metaReducers: metaReducers }), provideEffects([AuthStateEffects]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideHttpClient(withFetch())]
};
