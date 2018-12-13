import {Injectable} from '@angular/core';

@Injectable()
export class QuestionnaireService {
  theQuestion:any[] = ["What is the largest district of Nepal?", "What is the most populated district of Nepal?", "Which was the first national park of Nepal?", "How many districts are there in Himalayan region of Nepal?"];
  theChoices:any[] = [["Dulpa", "Humla", "Manang"], ["Kathmandu", "Morang"], ["Chitwan", "Phewa"], ["11", "12", "16"]];
  theCorrectAnswer:any[] = ["Dulpa", "Kathmandu", "Chitwan", "16"];
  constructor() {

  }


}
