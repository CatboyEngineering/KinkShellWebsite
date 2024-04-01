import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { UserComponent } from './components/pages/user/user.component';
import { canActivateAuthenticated } from './guards/auth-guard/can-activate-authenticated';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [canActivateAuthenticated()]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [canActivateAuthenticated()]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
