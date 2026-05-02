import {Routes} from '@angular/router';

import {LoginComponent} from './auth/login.component';
import {RegisterComponent} from './auth/register.component';
import {adminGuard} from './core/guards/admin.guard';
import {authGuard} from './core/guards/auth.guard';
import {AdminLayoutComponent} from './layout/admin-layout.component';
import {PrivateLayoutComponent} from './layout/private-layout.component';
import {PublicLayoutComponent} from './layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: 'app',
    component: PrivateLayoutComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authGuard, adminGuard]
  },
  {path: '**', redirectTo: 'login'}
];
