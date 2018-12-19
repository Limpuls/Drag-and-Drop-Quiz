import {Injectable} from '@angular/core';

@Injectable()
export class QuestionnaireService {
  theQuestion:any[] = ["Hvor mange kvinder kunne læse og skrive i Nepal i 1951?", "Hvor mange km vej var der i landet i 1951?", "Hvem bestemte i landet indtil 1951?", "I 19091 afholdt Nepal sit andet demokratiske valg. Hvor mange kvinder blev valgt ind parlamentet?", "Hvem blev skudt i 2001?"];
  theChoices:any[] = [["80%", "25%", "1%"], ["3 km", "13 km", "23 km"], ["Kong Tribhuvan Shah", "Den magtfulde Rana familie", "Militæret"], ["2,9%", "12,9%", "50%"], ["Kongens bror Gyanendra Shah", "Kong Tribuvan og hans søn Dipendra", "Hele kongefamilien undtagen Gyanandra og hans kone"]];
  theCorrectAnswer:any[] = ["1%", "3 km", "Den magtfulde Rana familie", "2,9%", "Hele kongefamilien undtagen Gyanandra og hans kone"];
  constructor() {

  }


}
