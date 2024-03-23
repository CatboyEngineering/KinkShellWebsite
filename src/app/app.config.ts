import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MetaReducer, provideStore } from '@ngrx/store';
import { localstorageMetaReducer } from './store/localstorage-meta.reducer';
import { rootReducer } from './store/store';
import { provideEffects } from '@ngrx/effects';

export const metaReducers: MetaReducer[] = [localstorageMetaReducer];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(rootReducer, { metaReducers: metaReducers }), provideEffects()]
};
