import { Component } from '@angular/core';
import { HTTPService } from '../../../services/http-service/http.service';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { AccountLoginRequest } from '../../../models/API/request/account-login-request.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm } from '../../../models/form/login-form.interface';
import { UiFormFieldErrorComponent } from '../../ui/ui-form-field-error/ui-form-field-error.component';
import { FormName } from '../../../models/enum/form-name.enum';
import { UiFormErrorComponent } from '../../ui/ui-form-error/ui-form-error.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, UiFormFieldErrorComponent, UiFormErrorComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup<LoginForm>;
  FormName = FormName;

  constructor(private formBuilder: FormBuilder, private authStateService: AuthStateService) {
    this.loginForm = this.formBuilder.group<LoginForm>({
      username: this.formBuilder.nonNullable.control('', { updateOn: 'submit', validators: Validators.required }),
      password: this.formBuilder.nonNullable.control('', { updateOn: 'submit', validators: Validators.required })
    });
  }

  submit() {
    if (this.loginForm.valid) {
      let request: AccountLoginRequest = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      };

      this.authStateService.onLoginRequest(request);
    }
  }
}
