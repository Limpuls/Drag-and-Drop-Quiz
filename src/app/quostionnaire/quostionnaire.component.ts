import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quostionnaire',
  templateUrl: './quostionnaire.component.html',
  styleUrls: ['./quostionnaire.component.css']
})
export class QuostionnaireComponent implements OnInit {
  questions:any;
  answers:any;
  correstAnswers:any;
  incremental:number = 0;
  constructor(private questionnaire: QuestionnaireService, private router: Router) {

   }
   nextQuestion():void {
     this.incremental++;
     this.questions = this.questionnaire.theQuestion[this.incremental];
     this.answers = this.questionnaire.theChoices[this.incremental];
     if(this.questions === undefined) {
       console.log("done");
       this.router.navigate(['/']);
     }
   }

  ngOnInit() {
    this.questions = this.questionnaire.theQuestion[this.incremental];
    this.answers = this.questionnaire.theChoices[this.incremental];
  }


}
