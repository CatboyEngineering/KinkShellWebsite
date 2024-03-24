import { createAction, props } from '@ngrx/store';
import { FormName } from '../../models/enum/form-name.enum';
import { AccountCreateRequest } from '../../models/API/request/account-create-request.interface';
import { AccountAuthenticatedResponse } from '../../models/API/response/account-authenticated-response.interface';
import { AccountLoginRequest } from '../../models/API/request/account-login-request.interface';

export abstract class AuthStateActions {
  static readonly registerAttempt = createAction('@kinkshell/action/register/attempt', props<{ request: AccountCreateRequest }>());
  static readonly registerSuccess = createAction('@kinkshell/action/register/success', props<{ response: AccountAuthenticatedResponse }>());
  static readonly loginAttempt = createAction('@kinkshell/action/login/attempt', props<{ request: AccountLoginRequest }>());
  static readonly loginSuccess = createAction('@kinkshell/action/login/success', props<{ response: AccountAuthenticatedResponse }>());
  static readonly authFailure = createAction('@kinkshell/action/authentication/failure', props<{ form: FormName; error: any }>());
  static readonly authExpired = createAction('@kinkshell/action/authentication/expired');
  static readonly logOutAttempt = createAction('@kinkshell/action/logout/attempt');
  static readonly logOutSuccess = createAction('@kinkshell/action/logout/success');
  static readonly authDataCleared = createAction('@kinkshell/action/authentication/cleared');
}
