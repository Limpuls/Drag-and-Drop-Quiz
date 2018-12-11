import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent  {

  questions:string[] = ["what is nepal?", "what is nepal2?", "what is nepal3?"];
  correctAns:string[] = ["Carrot", "Onion", "Potato", "Capsicum"];
  //answers:string[] = [["vienas", "du"], ["keturi", "10"]];
  i:number = 0;
  score:number = 0;
  indexes:any;
  vegetables = [[
  {name: 'Carrot', type: 'vegetable'},
  {name: 'Onion', type: 'vegetable'},
  {name: 'Potato', type: 'vegetable'},
  {name: 'Capsicum', type: 'vegetable'}],
  [
  {name: 'Carrotas', type: 'vegetable'},
  {name: 'Onionas', type: 'vegetable'},
  {name: 'Potatoas', type: 'vegetable'},
  {name: 'Capsicumas', type: 'vegetable'}]]


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

      this.indexes = this.vegetables[this.i];
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
