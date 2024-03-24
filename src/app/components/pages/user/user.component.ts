import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userID$: Observable<String>;
  displayName$: Observable<String>;

  constructor(private authStateService: AuthStateService) {
    this.userID$ = this.authStateService.userID$;
    this.displayName$ = this.authStateService.displayName$;
  }
}
