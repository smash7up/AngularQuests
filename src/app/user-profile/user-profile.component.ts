import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    name : "Doe",
    firstname : "John",
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  hidden : boolean = false;

  masquer() {
    this.hidden = !this.hidden;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
