import { createAction, props } from '@ngrx/store';
import { FormValidationError } from '../../models/form-validation-error.interface';
import { Account } from '../../models/account.interface';

export abstract class AppDetailsStateActions {
  static readonly serverError = createAction('@kinkshell/action/error/server', props<{ error: any }>());
  static readonly formError = createAction('@kinkshell/action/error/form', props<{ error: FormValidationError }>());
  static readonly formErrorsCleared = createAction('@kinkshell/action/error/form/clear');
  static readonly clearFullState = createAction('@kinkshell/action/state/cleared');
  static readonly authenticationHeartbeatAttempt = createAction('@kinkshell/action/heartbeat/attempt');
  static readonly authenticationHeartbeatSucceeded = createAction('@kinkshell/action/heartbeat/succeed');
}
