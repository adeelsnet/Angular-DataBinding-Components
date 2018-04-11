import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment - Bind it!';
  oddNumbersArray: number[] = [];
  evenNumbersArray: number[] = [];

  numbersFired(allNumbers: number) {
    if (allNumbers % 2 === 1) {
      this.oddNumbersArray.push(allNumbers);
    } else {
      this.evenNumbersArray.push(allNumbers);
    }

  }

  resetValues() {
    this.oddNumbersArray.splice(0, this.oddNumbersArray.length);
    this.evenNumbersArray.splice(0, this.evenNumbersArray.length);
  }
}
