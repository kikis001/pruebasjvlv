import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { roomGuard } from './guards/room.guard';
import { NgModule } from '@angular/core';
import { WinnersComponent } from './components/winners/winners.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  { path: 'questionnaire/:id', component: QuestionnaireComponent, canActivate: [authGuard, roomGuard]},
  { path: 'winners', component: WinnersComponent, canActivate: [authGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
