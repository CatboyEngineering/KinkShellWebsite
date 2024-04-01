import { createAction, props } from '@ngrx/store';
import { FormName } from '../../models/enum/form-name.enum';
import { AccountCreateRequest } from '../../models/API/request/account-create-request.interface';
import { AccountAuthenticatedResponse } from '../../models/API/response/account-authenticated-response.interface';
import { AccountLoginRequest } from '../../models/API/request/account-login-request.interface';
import { NameChangeRequest } from '../../models/API/request/name-change-request.interface';
import { NameChangeResponse } from '../../models/API/response/name-change-response.interface';
import { ChangePasswordRequest } from '../../models/API/request/change-password-request.interface';

export abstract class AuthStateActions {
  static readonly registerAttempt = createAction('@kinkshell/action/register/attempt', props<{ request: AccountCreateRequest }>());
  static readonly registerSuccess = createAction('@kinkshell/action/register/success', props<{ response: AccountAuthenticatedResponse }>());
  static readonly loginAttempt = createAction('@kinkshell/action/login/attempt', props<{ request: AccountLoginRequest }>());
  static readonly loginSuccess = createAction('@kinkshell/action/login/success', props<{ response: AccountAuthenticatedResponse }>());
  static readonly authFailure = createAction('@kinkshell/action/authentication/failure', props<{ form: FormName; error: any }>());
  static readonly authExpired = createAction('@kinkshell/action/authentication/expired');
  static readonly nameChangeAttempt = createAction('@kinkshell/action/namechange/attempt', props<{ request: NameChangeRequest }>());
  static readonly nameChangeSuccess = createAction('@kinkshell/action/namechange/success', props<{ response: NameChangeResponse }>());
  static readonly logOutAttempt = createAction('@kinkshell/action/logout/attempt');
  static readonly logOutSuccess = createAction('@kinkshell/action/logout/success');
  static readonly changePasswordAttempt = createAction('@kinkshell/action/passwordchange/attempt', props<{ request: ChangePasswordRequest }>());
  static readonly changePasswordSuccess = createAction('@kinkshell/action/passwordchange/success');
  static readonly deleteAttempt = createAction('@kinkshell/action/delete/attempt');
  static readonly deleteSuccess = createAction('@kinkshell/action/delete/success');
  static readonly authDataCleared = createAction('@kinkshell/action/authentication/cleared');
}
