import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dylan';

  onomatopiaList: Array<string> = [];
  defaultOnomatopia: string = "";

  onReceiveNewOnomatopia(e: string): void {
    this.onomatopiaList.push(e);
  }
}
