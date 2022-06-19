import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ReunionListComponent } from './components/reunion-list/reunion-list.component';
import { ReunionDetailsComponent } from './components/reunion-details/reunion-details.component';
import { AddReunionComponent } from './components/add-reunion/add-reunion.component';
import { ReunionComponent } from './components/reunion/reunion.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'reunions', component: ReunionListComponent },
  { path: 'reunions/:id', component: ReunionComponent },
  { path: 'reunions/:rName', component: ReunionComponent },
  { path: 'add', component: AddReunionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
