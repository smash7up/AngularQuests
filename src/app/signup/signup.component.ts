import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: User = new User("", "", "", "");

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model);
}
}

export class User {
  email: string;
  firstname: string;
  lastname: string;
  password: string;

  constructor(email: string, firstname: string, lastname: string, password: string) {
      this.email = email;
      this.firstname = firstname;
      this.lastname = lastname;
      this.password = password;
  }
}
