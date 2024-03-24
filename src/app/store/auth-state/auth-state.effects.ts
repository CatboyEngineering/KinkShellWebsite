import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store/src/models';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { AuthStateActions } from './auth-state.actions';
import { HTTPService } from '../../services/http-service/http.service';
import { AccountAuthenticatedResponse } from '../../models/API/response/account-authenticated-response.interface';
import { FormName } from '../../models/enum/form-name.enum';

@Injectable()
export class AuthStateEffects {
  constructor(private actions$: Actions, private httpService: HTTPService, private router: Router) {}

  registerAttempt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthStateActions.registerAttempt),
      mergeMap(action =>
        this.httpService.PUT<AccountAuthenticatedResponse>('account', action.request).pipe(
          map(response => {
            if(response.ok) {
            return AuthStateActions.registerSuccess({ response: response.body! })
            }else {
              return AuthStateActions.authFailure({ form: FormName.REGISTER_ACCOUNT, error: response })
            }
          })
        )
      )
    )
  );

  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthStateActions.registerSuccess),
        tap(() => {
          this.router.navigate(['/user']);
        })
      ),
    { dispatch: false }
  );

  loginAttempt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthStateActions.loginAttempt),
      mergeMap(action =>
        this.httpService.POST<AccountAuthenticatedResponse>('account', action.request).pipe(
          map(response => {
            if(response.ok) {
              return AuthStateActions.loginSuccess({ response: response.body! });
            }else{
              return AuthStateActions.authFailure({ form: FormName.LOG_IN, error: response })
            }
        })
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthStateActions.loginSuccess),
        tap(() => {
          this.router.navigate(['/user']);
        })
      ),
    { dispatch: false }
  );

  logOutAttempt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthStateActions.logOutAttempt),
      mergeMap(() =>
        this.httpService.POST<any>('logout', {}).pipe(
          map(response => {
            if(response.ok) {
              return AuthStateActions.logOutSuccess()
            }else{
              return AuthStateActions.logOutSuccess()
            }
          })
        )
      )
    )
  );

  logOutSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthStateActions.logOutSuccess),
      tap(() => {
        this.router.navigate(['/']);
      })
    )
  );

  authFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthStateActions.authFailure),
      tap(payload => window.alert(payload.form + ": "+payload.error))
    )
  );
}