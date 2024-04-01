import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NameChangeFormComponent } from '../../forms/name-change-form/name-change-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe, NameChangeFormComponent, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userID$: Observable<String>;
  displayName$: Observable<String>;

  isDeleting = false;

  constructor(private authStateService: AuthStateService) {
    this.userID$ = this.authStateService.userID$;
    this.displayName$ = this.authStateService.displayName$;
  }

  logOut(): void {
    this.authStateService.onLogOut();
  }

  deleteAccount(): void {
    if(!this.isDeleting) {
      this.isDeleting = true;
    }else{
      this.authStateService.onDeleteAccountRequest();
    }
  }
}