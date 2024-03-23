import { Action, createReducer, on } from '@ngrx/store';
import { authInitialState } from './auth-initial-state';
import { AuthStateActions } from './auth-state.actions';
import { AuthState } from './auth-state.interface';

const reducer = createReducer(
  authInitialState,
  on(
    AuthStateActions.registerSuccess,
    (state, action): AuthState => ({
      ...state,
      authToken: action.response.authToken,
      accountID: action.response.accountID,
      displayName: action.response.displayName
    })
  ),
  on(
    AuthStateActions.loginSuccess,
    (state, action): AuthState => ({
      ...state,
      authToken: action.response.authToken,
      accountID: action.response.accountID,
      displayName: action.response.displayName
    })
  ),
  on(AuthStateActions.logOutSuccess, (state, action): AuthState => authInitialState),
  on(AuthStateActions.authDataCleared, (state, action): AuthState => authInitialState)
);

export function authStateReducer(state: AuthState, action: Action) {
  return reducer(state, action);
}
