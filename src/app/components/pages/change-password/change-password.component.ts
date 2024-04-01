import { Component } from '@angular/core';
import { ChangePasswordFormComponent } from '../../forms/change-password-form/change-password-form.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ChangePasswordFormComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

}
