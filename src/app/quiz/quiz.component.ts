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

  questions:string[] = ["what is nepal?", "what is nepal2?", "what is nepal3?"];
  correctAns:string[] = ["Carrot", "Onion", "Potato", "Capsicum"];
  //answers:string[] = [["vienas", "du"], ["keturi", "10"]];
  i:number = 0;
  score:number = 0;
  indexes:any;
  finished:boolean;
  vegetables = [[
  {name: 'Carrot', type: 'vegetable'},
  {name: 'Onion', type: 'vegetable'},
  {name: 'Potato', type: 'vegetable'},
  {name: 'Capsicum', type: 'vegetable'}],
  [
  {name: 'Carrotas', type: 'vegetable'},
  {name: 'Onion', type: 'vegetable'},
  {name: 'Potatoas', type: 'vegetable'},
  {name: 'Capsicumas', type: 'vegetable'}],
  [
  {name: 'Carrotas2', type: 'vegetable'},
  {name: 'Onionas2', type: 'vegetable'},
  {name: 'Potatoas2', type: 'vegetable'},
  {name: 'Capsicumas2', type: 'vegetable'}]]


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
