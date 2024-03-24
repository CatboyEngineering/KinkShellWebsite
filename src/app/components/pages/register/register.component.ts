import { Component } from '@angular/core';
import { RegisterFormComponent } from '../../forms/register-form/register-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
