import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { UserComponent } from './components/pages/user/user.component';
import { canActivateAuthenticated } from './guards/auth-guard/can-activate-authenticated';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { canActivateAdmin } from './guards/admin-guard/can-activate-admin';

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
    path: 'privacy-policy',
    component: PrivacyComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [canActivateAuthenticated()]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [canActivateAuthenticated(), canActivateAdmin()]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
