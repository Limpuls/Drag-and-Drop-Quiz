import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';

export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quiz', component: QuizComponent},
  {path: '**', component: NotfoundComponent}
]);
