import {Injectable} from '@angular/core';

@Injectable()
export class QuestionnaireService {
  theQuestion:any[] = ["Which one of the three is a programming language: Javascript, HTML, CSS", "ExpressJS is a back end or front end framework?"];
  theChoices:any[] = [["Javascript", "HTML", "CSS"], ["Back End", "Front End"]];
  theCorrectAnswer:any[] = ["Javascript", "Back End"];
  constructor() {

  }
  

}
