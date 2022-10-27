import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {


  @Input()
myKittens : Array <Kitten> = [new Kitten ("","","","", true),]

  constructor() {  }

  ngOnInit(): void {
  
  }

}