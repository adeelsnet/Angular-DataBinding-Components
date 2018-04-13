import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment - Bind it!';
  invisible: boolean = true;
  totalNumbersFired: number;
  oddNumbersArray: number[] = [];
  evenNumbersArray: number[] = [];

  numbersFired(allNumbers: number) {
    this.invisible = false;
    this.totalNumbersFired = allNumbers;
    if (allNumbers % 2 === 1) {
      this.oddNumbersArray.push(allNumbers);
    } else {
      this.evenNumbersArray.push(allNumbers);
    }

  }

  resetValues() {
    this.invisible = true;
    this.totalNumbersFired = 0;
    this.oddNumbersArray.splice(0, this.oddNumbersArray.length);
    this.evenNumbersArray.splice(0, this.evenNumbersArray.length);
  }
}
