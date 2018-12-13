import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import { AuthService } from '../services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { routing } from '../app.routing';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent  {
  user:any;
  constructor(private _auth: AuthService, private _db: AngularFireDatabase, private router: Router) {
    this.user = _auth.getCurrentUser();
  }

  questions:string[] = ["What is the largest district of Nepal?", "What is the most populated district of Nepal?", "Which was the first national park of Nepal?", "How many districts are there in Himalayan region of Nepal?", "Which is the biggest National Park of Nepal?"];
  correctAns:string[] = ["Dolpa", "Kathmandu", "Chitwan", "Capsicum", "16", "She-Phoksundo"];

  i:number = 0;
  score:number = 0;
  indexes:any;
  finished:boolean;
  vegetables = [[
  {name: 'Dulpa', type: 'vegetable'},
  {name: 'Humla', type: 'vegetable'},
  {name: 'Manang', type: 'vegetable'},
  {name: 'Mustang', type: 'vegetable'}],
  [
  {name: 'Kathmandu', type: 'vegetable'},
  {name: 'Morang', type: 'vegetable'},
  {name: 'Bhaktapur', type: 'vegetable'},
  {name: 'Rupandehi', type: 'vegetable'}],
  [
  {name: 'Chitwan', type: 'vegetable'},
  {name: 'Phewa', type: 'vegetable'},
  {name: 'Illam', type: 'vegetable'},
  {name: 'Nagarkot', type: 'vegetable'}],
  [
  {name: '11', type: 'vegetable'},
  {name: '12', type: 'vegetable'},
  {name: '16', type: 'vegetable'},
  {name: '14', type: 'vegetable'}],
  [
  {name: 'Lungtang', type: 'vegetable'},
  {name: 'She-Phoksundo', type: 'vegetable'},
  {name: 'Sagartmatha', type: 'vegetable'},
  {name: 'Chitwan', type: 'vegetable'}]]


//hey


  fruits = [
    {name: 'Apple', type: 'fruit'},
    {name: 'Orange', type: 'fruit'},
    {name: 'Mango', type: 'fruit'},
    {name: 'Banana', type: 'fruit'}];

  droppedFruits = [];
  droppedVegetables = [];
  droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  onFruitDrop(e: DropEvent) {
    this.droppedFruits.push(e.dragData);
    this.removeItem(e.dragData, this.fruits);
  }

  onVegetableDrop(e: DropEvent) {

    //this.droppedVegetables.push(e.dragData);
    console.log(e.dragData.name);
    if(e.dragData.name == this.correctAns[this.i]) {
      console.log("correct");
      this.score++;
      console.log("correct" + " " + this.score);

    }
   //this.removeItem(e.dragData, this.vegetables);
         console.log(e.dragData);
    this.i++;
    console.log(this.i);
    this._db.list("users").set(this._auth.userDetails.uid, {user: this.user, score: this.score});

      this.indexes = this.vegetables[this.i];
      if(this.questions.length == this.i) {
        console.log("done");
        this.finished = true;
        this.router.navigate(['/']);
      }

  }

  onAnyDrop(e: DropEvent) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
    } else {
      this.removeItem(e.dragData, this.fruits);
    }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }



}
