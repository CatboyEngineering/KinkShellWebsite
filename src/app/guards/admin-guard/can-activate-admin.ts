import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn } from '@angular/router';
import { AuthStateService } from '../../store/auth-state/auth-state.service';
import { Observable, map, take } from 'rxjs';

export function canActivateAdmin(): CanActivateFn {
  return () => {
    const authStateService = inject(AuthStateService);

    return authStateService.isAdmin$.pipe(
      take(1),
      map(isAdmin => {
        if (!isAdmin) {
          authStateService.onExpired();
          return false;
        }

        return true;
      })
    );
  };
}
