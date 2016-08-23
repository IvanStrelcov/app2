import { provideRouter, RouterConfig } from '@angular/router';

import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCreateComponent } from './components/user-create';
import { UserProfileComponent } from './components/user-profile';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'create', component: UserCreateComponent }
];
export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
