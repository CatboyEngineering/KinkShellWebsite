import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NameChangeFormComponent } from '../../forms/name-change-form/name-change-form.component';
import { Router, RouterLink } from '@angular/router';
import { ChangePasswordFormComponent } from '../../forms/change-password-form/change-password-form.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe, NameChangeFormComponent, ChangePasswordFormComponent, RouterLink, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userID$: Observable<string>;
  displayName$: Observable<string>;

  isDeleting = false;

  constructor(private authStateService: AuthStateService) {
    this.userID$ = this.authStateService.userID$;
    this.displayName$ = this.authStateService.displayName$;
  }

  deleteAccount(): void {
    if (!this.isDeleting) {
      this.isDeleting = true;
    } else {
      this.authStateService.onDeleteAccountRequest();
    }
  }

  copy(text: string) {
    try {
      navigator.clipboard.writeText(text);
    } catch {}
  }
}
