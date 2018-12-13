import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { QuostionnaireComponent } from './quostionnaire/quostionnaire.component';
import { AuthGuard } from './auth.guard';

export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
  {path: 'scoreboard', component: ScoreboardComponent, canActivate: [AuthGuard]},
  {path: 'questionnaire', component: QuostionnaireComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotfoundComponent}
]);
