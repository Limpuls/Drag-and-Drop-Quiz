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
import { routing } from './app.routing';
import { QuizComponent } from './quiz/quiz.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { QuostionnaireComponent } from './quostionnaire/quostionnaire.component';
import { QuestionnaireService } from './quostionnaire/questionnaire.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [BrowserModule, FormsModule, NgDragDropModule.forRoot(), CommonModule, ReactiveFormsModule, routing, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, AngularFireAuthModule, AngularFireDatabaseModule],
  declarations: [AppComponent, LoginComponent, HomeComponent, NotfoundComponent, QuizComponent, RegisterComponent, ScoreboardComponent, QuostionnaireComponent],
  bootstrap: [AppComponent],
  providers: [LoginService, AuthService, QuestionnaireService, AuthGuard],
  exports: [NgDragDropModule, CommonModule]
})
export class AppModule {}
