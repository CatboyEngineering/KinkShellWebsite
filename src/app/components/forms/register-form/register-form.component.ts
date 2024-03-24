import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterForm } from '../../../models/form/register-form.interface';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { AccountCreateRequest } from '../../../models/API/request/account-create-request.interface';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup<RegisterForm>;

  constructor(private formBuilder: FormBuilder, private authStateService: AuthStateService){
    this.registerForm = this.formBuilder.group<RegisterForm>({
      username: this.formBuilder.nonNullable.control('', { updateOn: 'submit', validators: Validators.compose([Validators.required, Validators.minLength(5)]) }),
      password: this.formBuilder.nonNullable.control('', { updateOn: 'submit', validators: Validators.compose([Validators.required, Validators.minLength(8)]) }),
      displayName: this.formBuilder.nonNullable.control('', { updateOn: 'submit', validators: Validators.required }),
      betaPassword: this.formBuilder.nonNullable.control('', { updateOn: 'submit', validators: Validators.required })
    })
  }

  submit() {
    if(this.registerForm.valid) {
      let request: AccountCreateRequest = {
        username: this.registerForm.controls.username.value,
        password: this.registerForm.controls.password.value,
        displayName: this.registerForm.controls.displayName.value,
        betaPassword: this.registerForm.controls.betaPassword.value
      }
  
      this.authStateService.onRegisterRequest(request);
    }else{
      window.alert("Please fill in each field before submitting.")
    }
  }
}
