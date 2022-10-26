import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newOnomatopia: string = "";

  @Output() sendOnomatopia: EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    this.sendOnomatopia.emit(this.newOnomatopia)
  }

}
