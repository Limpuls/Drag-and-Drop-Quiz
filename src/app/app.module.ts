import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { routing } from './app.routing.ts';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgDragDropModule.forRoot(), CommonModule, ReactiveFormsModule, routing],
  declarations: [AppComponent, LoginComponent, HomeComponent, NotfoundComponent, QuizComponent],
  bootstrap: [AppComponent],
  providers: [LoginService],
  exports: [NgDragDropModule, CommonModule]
})
export class AppModule {}
