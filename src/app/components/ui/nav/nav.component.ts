import { Component } from '@angular/core';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  expanded = false;
  isLoggedIn$: Observable<boolean>;

  constructor(private authStateService: AuthStateService) {
    this.isLoggedIn$ = authStateService.authToken$.pipe(
      map(token => !!token)
    );
  }

  logOut(): void {
    this.authStateService.onLogOut();
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }
}
