import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  kitten: Kitten = new Kitten('', '', '', '', true);

  @Output()
  sendKitten: EventEmitter<Kitten> = new EventEmitter();

  createKitten(): void {
    this.sendKitten.emit(this.kitten);
  }

  constructor() {}

  ngOnInit(): void {}
}
