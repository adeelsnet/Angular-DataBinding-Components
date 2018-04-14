import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment - Bind it!';
  invisible: boolean = true;
  totalNumbersFired: number = 0;
  oddSerialAppCom: number = 0;
  evenSerialAppCom: number = 0;
  oddNumbersArray: number[] = [];
  evenNumbersArray: number[] = [];

  numbersFired(allNumbers: number) {
    this.invisible = false;
    this.totalNumbersFired++;
    /* this.totalNumbersFired = allNumbers; */
    if (allNumbers % 2 === 1) {
      this.oddSerialAppCom++;
      this.oddNumbersArray.push(allNumbers);
    } else {
      this.evenSerialAppCom++;
      this.evenNumbersArray.push(allNumbers);
    }

  }

  resetValues() {
    this.invisible = true;
    this.totalNumbersFired = 0;
    this.oddSerialAppCom = 0;
    this.evenSerialAppCom = 0;
    this.oddNumbersArray.splice(0, this.oddNumbersArray.length);
    this.evenNumbersArray.splice(0, this.evenNumbersArray.length);
  }
}
