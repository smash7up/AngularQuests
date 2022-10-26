import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  skills: Array<Skill> = [
    new Skill('Angular', 'https://angular.io/assets/images/logos/angular/angular.png', 'https://angular.io/'),
  ]

  devs: Array<Developer> = [
    new Developer('Monster', 'Lee', 23, 'homme', 'Dev Junior', [
      this.skills[0], this.skills[1], this.skills[2]
    ])
  ]

  constructor() { }

  ngOnInit(): void {
  }

}