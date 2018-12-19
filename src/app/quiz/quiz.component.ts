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

  questions:string[] = ["How many times did Anjalis father fail in class 3?", "Why did Anjali like the time when her father was working in Saudi Arabia?", "How many of Anjali's friends from the village still go to school?", "What does Anjali like to do in her free time?", "Why is Anjali not allowed to visit her friends houses?"];
  correctAns:string[] = ["3 times", "There was no figthing", "No one", "Dancing", "Her mum is affraid that she will run away", "She-Phoksundo"];

  i:number = 0;
  score:number = 0;
  indexes:any;
  finished:boolean;
  vegetables = [[
  {name: '1 time', type: 'vegetable'},
  {name: '2 times', type: 'vegetable'},
  {name: '3 times', type: 'vegetable'}],
  [
  {name: 'He called home every day', type: 'vegetable'},
  {name: 'There was no figthing', type: 'vegetable'},
  {name: 'She got better clothes', type: 'vegetable'}],
  [
  {name: 'One other girl', type: 'vegetable'},
  {name: 'Two other girls', type: 'vegetable'},
  {name: 'No one', type: 'vegetable'}],
  [
  {name: 'Dancing', type: 'vegetable'},
  {name: 'Singing', type: 'vegetable'},
  {name: 'Reading', type: 'vegetable'}],
  [
  {name: 'Her mum is affraid that she will run away', type: 'vegetable'},
  {name: 'The friends do not want her to visit', type: 'vegetable'},
  {name: 'She doesnt have any friends', type: 'vegetable'}]]


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
        this.router.navigate(['/scoreboard']);
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
