import { Component } from '@angular/core';
import { HTTPService } from '../../../services/http-service/http.service';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { AccountLoginRequest } from '../../../models/API/request/account-login-request.interface';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private authStateService: AuthStateService) {}

  public submit(): void {
    let loginRequest: AccountLoginRequest = {
      username: 'yourmom',
      password: "Loltest123"
    }

    this.authStateService.onLoginRequest(loginRequest);
  }
}
