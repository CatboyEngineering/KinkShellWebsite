import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterForm } from '../../../models/form/register-form.interface';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { AccountCreateRequest } from '../../../models/API/request/account-create-request.interface';
import { AppDetailsStateService } from '../../../store/app-details-state/app-details-state.service';
import { UiFormFieldErrorComponent } from '../../ui/ui-form-field-error/ui-form-field-error.component';
import { FormName } from '../../../models/enum/form-name.enum';
import { UiFormErrorComponent } from '../../ui/ui-form-error/ui-form-error.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, UiFormFieldErrorComponent, UiFormErrorComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup<RegisterForm>;
  FormName = FormName;

  constructor(private formBuilder: FormBuilder, private authStateService: AuthStateService, private appDetailsStateService: AppDetailsStateService) {
    this.registerForm = this.formBuilder.group<RegisterForm>({
      username: this.formBuilder.nonNullable.control('', {
        updateOn: 'submit',
        validators: Validators.compose([Validators.required, Validators.minLength(6)])
      }),
      password: this.formBuilder.nonNullable.control('', {
        updateOn: 'submit',
        validators: Validators.compose([Validators.required, Validators.minLength(8)])
      }),
      displayName: this.formBuilder.nonNullable.control('', { updateOn: 'submit', validators: Validators.required }),
      betaPassword: this.formBuilder.nonNullable.control('', { updateOn: 'submit', validators: Validators.required })
    });
  }

  submit() {
    this.appDetailsStateService.onFormErrorsCleared();

    if (this.registerForm.valid) {
      let request: AccountCreateRequest = {
        username: this.registerForm.controls.username.value,
        password: this.registerForm.controls.password.value,
        displayName: this.registerForm.controls.displayName.value,
        betaPassword: this.registerForm.controls.betaPassword.value
      };

      this.authStateService.onRegisterRequest(request);
    }
  }
}
