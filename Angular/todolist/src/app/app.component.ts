import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';

  counter: number = 0;
  isDisabled: boolean = false;
  inputdata = 'David';

  add() {
    this.counter++;
  }
  toggle() {
    this.isDisabled = !this.isDisabled;
  }
}
