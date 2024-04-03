import { Component } from '@angular/core';
import { AppDetailsStateService } from '../../../store/app-details-state/app-details-state.service';
import { AuthStateService } from '../../../store/auth-state/auth-state.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Account } from '../../../models/account.interface';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ClipboardModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  accounts$: Observable<Account[]>;

  constructor(private authStateService: AuthStateService) {
    this.accounts$ = authStateService.accountList$;
  }

  requestUsers(): void {
    this.authStateService.onRequestGetUserList();
  }

  requestEditShells(): void {
    // TODO - this needs to be a form that collects: user id (or all), new max
    // this.authStateService.onRequestAdjustUserShells();
  }
}
