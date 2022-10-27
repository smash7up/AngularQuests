import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {


  kitten  : Array <Kitten> = [
    new Kitten ("pussy",  "poilue", "10.10.1984",  "https://image.jimcdn.com/app/cms/image/transf/dimension=4000x3000:format=jpg/path/s5dde8bff85c81b2f/image/ia932f710bc9f0af9/version/1560445533/image.jpg", true),
    new Kitten ("nunutte", "tigre", "10.10.1967",  "https://img.le-dictionnaire.com/chaton-tigre.jpg", true),
    
  ]


onReceiveNewKitten(event:any): void {
  this.kitten.push(event)
}


getIn(i:number){
  this.kitten[i].display = false}

  getOut(i:number){
    this.kitten[i].display = true}

myKittens : Array <Kitten> = [];

removeKitten(kitty: Kitten, i: number) {
  this.myKittens.push(kitty)
  console.log(this.myKittens)
  this.kitten.splice(i, 1)

}

  constructor() { }

  ngOnInit(): void {
  }

}